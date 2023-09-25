import { useState } from 'react';
import { createContext, useContext, useEffect } from 'react';

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-schema:dark)'
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true';
  return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);
  const [searchTerm, setSearchTerm] = useState('Dog');

  const toggleDarkTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkTheme', !darkMode);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);
  return (
    <AppContext.Provider
      value={{ darkMode, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
