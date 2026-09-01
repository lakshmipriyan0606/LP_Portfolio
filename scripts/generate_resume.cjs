const fs = require('fs');
const path = require('path');

// Page Dimensions (A4 in points)
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN_X = 36;
const CONTENT_W = PAGE_W - (MARGIN_X * 2); // 523.28 pt

// Accurate character width lookup table for standard PDF Helvetica / Helvetica-Bold
function getCharWidth(char, isBold) {
  if (char === ' ') return 278;
  if ('.,:;!\'|'.includes(char)) return 278;
  if ('ijlI'.includes(char)) return 278;
  if ('frtJ'.includes(char)) return isBold ? 389 : 333;
  if ('mwMW@'.includes(char)) return isBold ? 944 : 833;
  if (char >= 'A' && char <= 'Z') return isBold ? 722 : 667;
  if (char >= '0' && char <= '9') return 556;
  if ('–—'.includes(char)) return 600;
  if ('()[]{}'.includes(char)) return 333;
  return isBold ? 580 : 520;
}

function getTextWidth(text, size, isBold = false) {
  let total = 0;
  for (let i = 0; i < text.length; i++) {
    total += getCharWidth(text[i], isBold);
  }
  return (total * size) / 1000;
}

// Tokenize text containing **bold** markup into segments
function parseTokens(str) {
  const tokens = [];
  const parts = str.split(/(\*\*[^*]+\*\*)/g);
  for (let part of parts) {
    if (!part) continue;
    if (part.startsWith('**') && part.endsWith('**')) {
      tokens.push({ text: part.slice(2, -2), bold: true });
    } else {
      tokens.push({ text: part, bold: false });
    }
  }
  return tokens;
}

// PDF Document Builder
class PDFDoc {
  constructor() {
    this.ops = [];
    this.currentY = 808;
  }

  // Draw rule line across section
  hr(y, strokeWidth = 0.6) {
    this.ops.push(`${strokeWidth} w`);
    this.ops.push(`0.15 0.15 0.15 RG`);
    this.ops.push(`${MARGIN_X} ${y.toFixed(2)} m ${(PAGE_W - MARGIN_X).toFixed(2)} ${y.toFixed(2)} l S`);
  }

  // Draw small circular bullet dot
  bullet(x, y, radius = 1.35) {
    this.ops.push(`0.1 0.1 0.1 rg`);
    this.ops.push(`${(x - radius).toFixed(2)} ${(y - radius).toFixed(2)} ${(radius * 2).toFixed(2)} ${(radius * 2).toFixed(2)} re f`);
  }

  // Draw a raw text element
  text(str, x, y, size, font = 'F1', r = 0, g = 0, b = 0) {
    const safe = str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    this.ops.push('BT');
    this.ops.push(`/${font} ${size} Tf`);
    this.ops.push(`${r} ${g} ${b} rg`);
    this.ops.push(`1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm`);
    this.ops.push(`(${safe}) Tj`);
    this.ops.push('ET');
  }

  // Centered text
  centerText(str, y, size, font = 'F1', r = 0, g = 0, b = 0) {
    const isBold = font === 'F2';
    const w = getTextWidth(str, size, isBold);
    const x = (PAGE_W - w) / 2;
    this.text(str, x, y, size, font, r, g, b);
  }

  // Right-aligned text
  rightText(str, rightX, y, size, font = 'F1', r = 0, g = 0, b = 0) {
    const isBold = font === 'F2';
    const w = getTextWidth(str, size, isBold);
    const x = rightX - w;
    this.text(str, x, y, size, font, r, g, b);
  }

  // Section Heading with divider line
  sectionHeading(title) {
    this.currentY -= 5;
    this.text(title, MARGIN_X, this.currentY, 9.6, 'F2', 0, 0, 0);
    this.currentY -= 2.2;
    this.hr(this.currentY, 0.6);
    this.currentY -= 9.5;
  }

  // Rich paragraph wrapping with **bold** support
  wrapRichParagraph(markup, startX, maxW, size, lineHeight = 10.8) {
    const tokens = parseTokens(markup);
    
    // Break tokens into words
    const words = [];
    tokens.forEach(tok => {
      const parts = tok.text.split(' ');
      parts.forEach((p, idx) => {
        if (p || parts.length === 1) {
          words.push({
            word: p,
            bold: tok.bold,
            needsSpace: idx < parts.length - 1
          });
        }
      });
    });

    let currentLineWords = [];
    let currentLineWidth = 0;

    for (let i = 0; i < words.length; i++) {
      const wObj = words[i];
      const wordStr = wObj.word + (wObj.needsSpace ? ' ' : '');
      const wordW = getTextWidth(wordStr, size, wObj.bold);

      if (currentLineWidth + wordW > maxW && currentLineWords.length > 0) {
        // Render current line
        this.renderWordLine(currentLineWords, startX, this.currentY, size);
        this.currentY -= lineHeight;
        currentLineWords = [wObj];
        currentLineWidth = wordW;
      } else {
        currentLineWords.push(wObj);
        currentLineWidth += wordW;
      }
    }

    if (currentLineWords.length > 0) {
      this.renderWordLine(currentLineWords, startX, this.currentY, size);
      this.currentY -= lineHeight;
    }
  }

  renderWordLine(lineWords, startX, y, size) {
    let curX = startX;
    for (let i = 0; i < lineWords.length; i++) {
      const wObj = lineWords[i];
      const font = wObj.bold ? 'F2' : 'F1';
      const textToDraw = wObj.word + (wObj.needsSpace ? ' ' : '');
      this.text(textToDraw, curX, y, size, font, 0.05, 0.05, 0.05);
      curX += getTextWidth(textToDraw, size, wObj.bold);
    }
  }

  // Rich Bullet Item with **bold** inline tokens
  bulletItem(markup, indent = 11, lineHeight = 10.4) {
    const bulletX = MARGIN_X + 3.5;
    const bulletY = this.currentY + 2.5;
    this.bullet(bulletX, bulletY);

    const startX = MARGIN_X + indent;
    const maxW = CONTENT_W - indent;
    this.wrapRichParagraph(markup, startX, maxW, 8.4, lineHeight);
  }

  generatePDF() {
    const stream = this.ops.join('\n');
    const streamLen = Buffer.byteLength(stream, 'latin1');

    const objects = [];
    objects[1] = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj';
    objects[2] = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj';
    objects[3] = `3 0 obj\n<< /Type /Page /Parent 2 0 R\n   /MediaBox [0 0 ${PAGE_W} ${PAGE_H}]\n   /Contents 4 0 R\n   /Resources << /Font << /F1 5 0 R /F2 6 0 R /F3 7 0 R >> >> >>\nendobj`;
    objects[4] = `4 0 obj\n<< /Length ${streamLen} >>\nstream\n${stream}\nendstream\nendobj`;
    objects[5] = '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj';
    objects[6] = '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj';
    objects[7] = '7 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>\nendobj';

    let pdf = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';
    const offsets = {};

    for (let i = 1; i <= 7; i++) {
      offsets[i] = pdf.length;
      pdf += objects[i] + '\n';
    }

    const xrefPos = pdf.length;
    pdf += 'xref\n0 8\n0000000000 65535 f \n';
    for (let i = 1; i <= 7; i++) {
      pdf += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
    }
    pdf += `trailer\n<< /Size 8 /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;

    return Buffer.from(pdf, 'latin1');
  }
}

// ═══════════════════════════════════════════════════════════════
// BUILD RESUME CONTENT
// ═══════════════════════════════════════════════════════════════

const doc = new PDFDoc();

// --- 1. HEADER ---
doc.centerText('Lakshmi Priyan D', doc.currentY, 18, 'F2');
doc.currentY -= 14.5;

doc.centerText('MERN Stack Developer | Full Stack Developer | React.js Developer | Software Engineering', doc.currentY, 9.2, 'F1', 0.15, 0.15, 0.15);
doc.currentY -= 11.5;

doc.centerText('Chennai, Tamil Nadu | +91 77085 61615 | lakshmipriyan0606@gmail.com | linkedin.com/in/lakshmipriyan0606 |', doc.currentY, 8.1, 'F1', 0.08, 0.28, 0.72);
doc.currentY -= 10;
doc.centerText('github.com/lakshmipriyan0606 | lakshmipriyan-portfolio.vercel.app', doc.currentY, 8.1, 'F1', 0.08, 0.28, 0.72);
doc.currentY -= 12;

// --- 2. PROFESSIONAL SUMMARY ---
doc.sectionHeading('PROFESSIONAL SUMMARY');
doc.wrapRichParagraph(
  'MERN Stack Developer with **2.8+ years** of experience designing and delivering scalable full-stack web applications for enterprise B2B SaaS platforms. Proficient in **React.js**, **JavaScript (ES6+)**, **TypeScript**, **Node.js**, **Express.js**, **MongoDB**, **Redux Toolkit**, and **RESTful API development**, with expertise in full-stack architecture, reusable component libraries, database integration, JWT authentication, and frontend performance optimization in **Agile/Scrum** environments.',
  MARGIN_X, CONTENT_W, 8.4, 10.8
);
doc.currentY -= 3.5;

// --- 3. TECHNICAL SKILLS ---
doc.sectionHeading('TECHNICAL SKILLS');

const skills = [
  '**Frontend:** React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, React Hooks, React Router, React Flow, Webpack, Vite, Responsive Web Design',
  '**State Management:** Redux Toolkit, Redux Persist, TanStack Query (React Query), Context API, Zustand',
  '**Backend:** Node.js, Express.js, RESTful API Development, MongoDB, Mongoose, JWT Authentication, bcrypt, Middleware, CRUD Operations, MVC Architecture, Data Validation, Error Handling',
  '**Full Stack:** MERN Stack, Full-Stack Development, Frontend-Backend Integration, API Integration, Component-Based Architecture, Server-Side Rendering',
  '**Tools & Practices:** Git, GitHub, Axios, Postman, VS Code, Jira, Vercel, npm, ESLint, Agile/Scrum, Code Review, Cross-Functional Collaboration, Technical Documentation'
];

skills.forEach(s => {
  doc.wrapRichParagraph(s, MARGIN_X, CONTENT_W, 8.4, 10.5);
  doc.currentY -= 0.8;
});
doc.currentY -= 2;

// --- 4. PROFESSIONAL EXPERIENCE ---
doc.sectionHeading('PROFESSIONAL EXPERIENCE');

// Job 1
doc.text('Associate Software Engineer', MARGIN_X, doc.currentY, 9.2, 'F2');
const r1W = getTextWidth('Associate Software Engineer ', 9.2, true);
doc.text('|  Resulticks Edge Solution Pvt. Ltd', MARGIN_X + r1W, doc.currentY, 9.2, 'F2');
doc.rightText('Jan 2024 – Present', PAGE_W - MARGIN_X, doc.currentY, 8.5, 'F3', 0.2, 0.2, 0.2);
doc.currentY -= 12;

doc.bulletItem('Engineered enterprise full-stack **React.js** features using **JavaScript (ES6+)**, **TypeScript**, **Node.js**, and **Express.js** for a B2B marketing automation SaaS platform, delivering scalable modules across **Audience**, **Campaign**, **Dashboard**, **Analytics**, and **Notification**.');
doc.bulletItem('Architected **20+ reusable UI components** using **React.js**, **Redux Toolkit**, **Context API**, and **Kendo UI** following **component-based architecture** and **MVC design patterns**, reducing feature development time across **5+ product modules**.');
doc.bulletItem('Designed and integrated **15+ RESTful APIs** via **Axios** and **Express.js** for async data fetching, real-time state synchronization, form workflows, and frontend-backend integration across all modules.');
doc.bulletItem('Optimized **React.js** frontend performance by **25%** via lazy loading, code splitting, memoization (**useMemo**, **useCallback**), and render optimization, reducing page load time and improving user retention.');
doc.bulletItem('Built a **multi-campaign visual workflow builder** using **React Flow** with node-based UI, drag-and-drop canvas, dynamic validation, and **Redux Toolkit** state management, enabling non-technical users to build automation workflows without engineering support.');
doc.bulletItem('Collaborated in **Agile/Scrum** sprints with product, design, backend, and QA teams, contributing to sprint planning, peer code reviews, and retrospectives to deliver **5+ production-ready features** on schedule.');

doc.currentY -= 3.5;

// Job 2
doc.text('Full Stack Developer Intern (MERN)', MARGIN_X, doc.currentY, 9.2, 'F2');
const r2W = getTextWidth('Full Stack Developer Intern (MERN) ', 9.2, true);
doc.text('|  Error Makes Clever', MARGIN_X + r2W, doc.currentY, 9.2, 'F2');
doc.rightText('Jul 2023 – Nov 2023', PAGE_W - MARGIN_X, doc.currentY, 8.5, 'F3', 0.2, 0.2, 0.2);
doc.currentY -= 12;

doc.bulletItem('Built responsive frontend modules using **React.js**, **JavaScript (ES6+)**, **HTML5**, **CSS3**, and **Tailwind CSS** with reusable component patterns and responsive web design principles.');
doc.bulletItem('Developed **RESTful APIs** with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**, implementing CRUD operations, data validation, error handling, and frontend-backend integration.');
doc.bulletItem('Implemented **JWT authentication** with **bcrypt** password hashing, protected Express.js middleware, and session management as part of a complete **MERN stack** application.');

doc.currentY -= 3;

// --- 5. PROJECTS ---
doc.sectionHeading('PROJECTS');

doc.text('Sastikaa Travel – Full-Stack MERN Travel Booking Platform', MARGIN_X, doc.currentY, 9.2, 'F2');
doc.rightText('Live | GitHub', PAGE_W - MARGIN_X, doc.currentY, 8.5, 'F3', 0.08, 0.28, 0.72);
doc.currentY -= 12;

doc.bulletItem('Developed a production-grade **MERN stack** travel booking platform using **React.js**, **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **Redux Toolkit**, **Axios**, and **RESTful APIs** supporting destination discovery, package browsing, and end-to-end booking workflows.');
doc.bulletItem('Engineered a scalable **Node.js/Express.js REST API** backend with **MongoDB/Mongoose** implementing full CRUD operations, MVC architecture, input validation, and error handling middleware.');
doc.bulletItem('Implemented **JWT authentication**, bcrypt password hashing, role-based protected routes, and security middleware for user registration, login, and booking access control.');
doc.bulletItem('Achieved **30% improvement** in performance via lazy loading, image optimization, code splitting, and **TanStack Query** server-state caching, improving responsiveness across desktop and mobile devices, including single-page application (SPA) performance.');

doc.currentY -= 3;

// --- 6. EDUCATION ---
doc.sectionHeading('EDUCATION');

doc.text('Government College of Engineering, Bargur', MARGIN_X, doc.currentY, 9.2, 'F2');
doc.rightText('2019 – 2023', PAGE_W - MARGIN_X, doc.currentY, 8.5, 'F3', 0.2, 0.2, 0.2);
doc.currentY -= 11.5;

doc.text('Bachelor of Engineering – Electrical & Electronics Engineering (EEE)', MARGIN_X, doc.currentY, 8.5, 'F1');
doc.rightText('CGPA: 8.5 / 10', PAGE_W - MARGIN_X, doc.currentY, 8.5, 'F2');

// Write out to public/resume.pdf
const pdfBuffer = doc.generatePDF();
const outputPath = path.join(__dirname, '..', 'public', 'resume.pdf');
fs.writeFileSync(outputPath, pdfBuffer);

console.log('Successfully generated pixel-perfect resume.pdf at:', outputPath);
console.log('Final Y coordinate (margin remaining at bottom):', doc.currentY);
