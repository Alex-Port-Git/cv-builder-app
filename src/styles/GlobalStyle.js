import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    max-width: 900px;
    margin: auto;
    padding: 1rem;
  }

  input, textarea, select, button {
    font-family: inherit;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 0.5rem;
  }

  button:hover {
    opacity: 0.9;
  }
`;

export default GlobalStyle;
