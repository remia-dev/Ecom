import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Product Provider
import ProductProvider from "./contexts/ProductContext";

// Sidebar Provider
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <SidebarProvider>
      <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
      </CartProvider>
    </SidebarProvider>
);
