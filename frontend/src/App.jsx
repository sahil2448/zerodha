import "./App.css";

// import React from "react";
import HomePage from "./landing_page/home/HomePage";
// import Signup from "./landing_page/Authentication/Signup";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/product/ProductPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import AuthWrapper from "./landing_page/Authentication/AuthWrapper";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthWrapper />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
