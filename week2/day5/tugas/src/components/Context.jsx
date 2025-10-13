import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Menggunakan useContext
  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#eee' : '#333',
    color: theme === 'light' ? '#333' : '#eee',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Ganti Tema ({theme})
    </button>
  );
}

function ThemedParagraph() {
  const { theme } = useContext(ThemeContext);
  const paragraphStyle = {
    color: theme === 'light' ? '#000' : '#fff',
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    padding: '10px',
    borderRadius: '5px'
  };
  return (
    <p style={paragraphStyle}>
      Ini adalah paragraf dengan tema {theme}.
    </p>
  );
}

export { ThemeProvider, ThemedButton, ThemedParagraph };