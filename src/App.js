import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./style.css";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
