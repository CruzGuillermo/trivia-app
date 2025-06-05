import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <nav className="navbar">
      <h1 className="navbar-title">TriviaApp</h1>
      <motion.button
        className="darkmode-toggle"
        onClick={toggleDarkMode}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle dark mode"
        title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      >
        {darkMode ? '🌞' : '🌙'}
      </motion.button>
    </nav>
  );
};

export default Navbar;
