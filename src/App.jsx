import React from "react";
import Hero from "./components/Hero";
import BrandSales from "./components/BrandSales";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";
import FlexContent from "./components/FlexContent";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <BrandSales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <BrandSales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
