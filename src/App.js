import "./App.css";
import Features from "./components/Features";
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
    <Locations/>
    </>
  );
}

export default App;
