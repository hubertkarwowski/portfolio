import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./style.css";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <AboutMe />
    </>
  );
}

export default App;
