import React from "react";
import { Container } from "./PortfolioElements";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioProject from "./PortfolioProject";
import weatherAppImage from "../../assets/weather-app.jpg";
import teaShopImage from "../../assets/tea-shop.jpg";
import PortfolioProjectReverse from "./PortfolioProjectReversed";

function Portfolio() {
  return (
    <Container id="portfolio">
      <PortfolioHeader />
      <PortfolioProject
        title="Weather App"
        description="Weather App allows you to check current weather. This is my first
            react project."
        image={weatherAppImage}
        alt="Weather App Image"
        github="https://github.com/hubertkarwowski/weather-appv2"
      />
      <PortfolioProjectReverse
        title="Tea Shop"
        description="Tea Shop is an e-commerce website project
i have created to sell tea."
        image={teaShopImage}
        alt="Tea Shop Image"
        github="https://github.com/hubertkarwowski/weather-appv2"
      />
    </Container>
  );
}

export default Portfolio;
