import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; 

import App from "./App.jsx";
import GlobalStyles from "@/GlobalStyles.js";
import { BrowserRouter } from "react-router";
import ScrollToTop from "./utils/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  </StrictMode>
);
