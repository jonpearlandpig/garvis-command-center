import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('garvis-theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('garvis-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('garvis-theme', 'light');
    }
  };

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>
      <Component {...pageProps} />
    </>
  );
}

export default App;
