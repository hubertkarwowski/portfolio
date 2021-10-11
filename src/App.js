import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./style.css";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
    </>
  );
}

export default App;
