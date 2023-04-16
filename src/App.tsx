import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
import Sidebar from './components/Sidebar'

// Pages
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
