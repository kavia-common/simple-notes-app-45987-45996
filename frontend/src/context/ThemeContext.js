import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

/**
 * Simple theme context with light/dark toggle stored in localStorage.
 */
const ThemeContext = createContext({ theme: 'light', toggle: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('notes_theme');
      return saved || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('notes_theme', theme);
    } catch {
      /* noop */
    }
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  const value = useMemo(() => ({ theme, toggle }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// PUBLIC_INTERFACE
export function useTheme() {
  /** Access the theme state and toggle function. */
  return useContext(ThemeContext);
}
