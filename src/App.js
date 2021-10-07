import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./style.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
