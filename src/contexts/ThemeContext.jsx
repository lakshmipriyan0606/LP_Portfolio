import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Always force light mode — remove any previously saved dark preference
  if (typeof window !== 'undefined') {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'light');
  }

  return (
    <ThemeContext.Provider value={{ isDark: false, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};