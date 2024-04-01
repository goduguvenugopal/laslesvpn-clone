import "./App.css";
import Customers from "./components/Customers";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";
import Prices from "./components/Prices";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Prices />
      <Locations />
      <Customers />
      <Footer />
    </>
  );
}

export default App;
