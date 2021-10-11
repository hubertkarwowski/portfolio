import React from "react";
import {
  Container,
  PortfolioDescription,
  PortfolioTitle,
} from "./PortfolioHeaderElements";

function PortfolioHeader() {
  return (
    <Container>
      <PortfolioTitle>
        <h2>PORTFOLIO</h2>
      </PortfolioTitle>
      <PortfolioDescription>
        <h4>Below you can see some projects I've been working on lately.</h4>
      </PortfolioDescription>
    </Container>
  );
}

export default PortfolioHeader;
