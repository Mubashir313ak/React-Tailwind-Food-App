import "./App.css";
import Category from "./Components/Category.jsx";
import Food from "./Components/Food.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero";
import HeadlineCards from "./Components/Last.jsx";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Food />
      <Category />
      <HeadlineCards />
      <Footer />
    </>
  );
}

export default App;
