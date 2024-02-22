import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/productContext.jsx";
import { FilterProductProvider } from "./context/filterProductContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppProvider>
      <FilterProductProvider>
        <CartProvider>
        <App />
        </CartProvider>
      </FilterProductProvider>
    </AppProvider>
);
