import React from "react"
import "./App.css";
import Prices from "./assets/Prices";
import Customers from "./assets/Customers";
import Features from "./assets/Features";
import Footer from "./assets/Footer";
import Header from "./assets/Header";
import Locations from "./assets/Locations";
import Navbar from "./assets/Navbar";


const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Prices />
      <Locations />
       <Customers/>
      <Footer />
    </>
  );
}

export default App;
