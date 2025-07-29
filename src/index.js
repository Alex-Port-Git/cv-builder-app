import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import { CvContextProvider } from './context/CvContext';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { useThemeContext } from './context/ThemeContext';

const Root = () => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <CvContextProvider>
          <Root />
        </CvContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
