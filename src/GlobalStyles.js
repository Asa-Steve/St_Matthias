import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  /* colors */
  --color-green-0: #e0f2f1;
    --color-green-100:#dcfce7;
    --color-green-700: #15803d;

    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-red-700: #b91c1c;
    --color-red-200:rgba(185, 28, 28, 0.82);
    --color-blue-700: #0369a1;
  
    --color-yellow-900: #ffe600;
    --color-dark-900: #000000;
    
    /* Overlay */
    --color-over-900: hsla(221, 39%, 11%, 0.576);
    --color-over-100: #000000b4;
  
    /* Backdrop */
    --backdrop-color: rgba(255, 255, 255, 0.1);

    --text-shadow: #140101;
  
    /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;
  
    /* Fonts */
    --f-xxsm: 12px;
    --f-xsm: 14px;
    --f-sm: 16px;
    --f-md: 20px;
    --f-lg: 32px;
    --f-xlg: 45px;
  
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    /* Colors */
  --color-primary: rgba(255, 0 ,102, 1);
  --color-secondary: #001220;
}
  /* CSS Reset / Normalize */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Set default body styles */
  body {
    /* font-family: "Gill Sans ",Gill Sans MT,Calibri,Trebuchet MS,sans-serif; */
    /* font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; */
    font-family: "Roboto", sans-serif;
    
    background-color: #f9f9f9;
    color: var(--color-secondary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  #root{
    height: 100vh;
    overflow-y: auto;
  }

  button, a, input, textarea {
  -webkit-tap-highlight-color: transparent; // removing the blueish overlay when click occurs
}

  /* Links */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Remove default list styles */
  ul, ol {
    list-style: none;
  }

  /* Inputs and buttons */
  input, button, textarea, select {
    font: inherit;
    border: none;
    outline: none;
    background: none;
  }

  button {
    cursor: pointer;

    &:disabled{
      background-color: var(--color-grey-300) !important;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* Root font size (useful for rem) */
  html {
    font-size: var(--f-sm);
    /* scroll-behavior: smooth; */
  }

  /* Selection highlight */
  ::selection {
    background-color: #c1e1e1;
    color: #000;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #e4e4e4;
  }

  ::-webkit-scrollbar-thumb {
    background-color: teal;
    border-radius: 10px;
  }
`;

export default GlobalStyles;
