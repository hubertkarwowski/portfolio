import React from "react";
import { Container } from "./PortfolioElements";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioProject from "./PortfolioProject";
import weatherAppImage from "../../assets/weather-app.jpg";
import ShopImage from "../../assets/mockup2.jpg";
import ScootImage from "../../assets/mockup1.jpg";

function Portfolio() {
  return (
    <Container id="portfolio">
      <PortfolioHeader />
      <PortfolioProject
        title="Shop"
        description="Shop project created during course with react, redux, styled components, react-router-dom and firebase."
        image={ShopImage}
        alt="Shop Image"
        github="https://github.com/hubertkarwowski/shop"
        link="https://crwn-shop2001.herokuapp.com/"
      />
      <PortfolioProject
        title="Scoot Multi-page Website"
        description="This is a multi-page website created with react, react-router and styled-components and smooth animations."
        image={ScootImage}
        alt="Shop Image"
        github="https://github.com/hubertkarwowski/Scoot"
        link="https://fir-hosting-scoot.web.app/"
      />
      <PortfolioProject
        title="Weather App"
        description="Weather App allows you to check current weather. This is my first
            react project."
        image={weatherAppImage}
        alt="Weather App Image"
        github="https://github.com/hubertkarwowski/weather-appv2"
      />
    </Container>
  );
}

export default Portfolio;
