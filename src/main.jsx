import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

      <ProductProvider>
        <CartProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </CartProvider>
      </ProductProvider>
      
    </BrowserRouter>
  </StrictMode>
);
