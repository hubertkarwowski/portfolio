import React from "react";
import { Container } from "./PortfolioElements";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioProject from "./PortfolioProject";
import weatherAppImage from "../../assets/weather-app.jpg";
import ShopImage from "../../assets/mockup2.jpg";
import ScootImage from "../../assets/mockup1.jpg";
import SunnyImage from "../../assets/sunnyside.jpg";

function Portfolio() {
  return (
    <Container>
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
        alt="Scoot Image"
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
        link="https://fir-hosting-weather-20507.web.app/"
      />
      <PortfolioProject
        title="Sunnyside Landing page "
        description="I tried to build a site as fast as i can with react and styled-components, site works for 375px and 1440px."
        image={SunnyImage}
        alt="Landing page Image"
        github="https://github.com/hubertkarwowski/sunnyside"
        link="https://fir-hosting-sunnyside.web.app/"
      />
    </Container>
  );
}

export default Portfolio;
