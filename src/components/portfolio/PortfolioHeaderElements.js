import styled from "styled-components";
import { firstFont, secondFont } from "../../StyledVariables";

export const Container = styled.div`
  display: flex;
  justify-items: center;
  background-color: #fafafa;
  flex-direction: column;
  text-align: center;
`;

export const PortfolioTitle = styled.div`
  h2 {
    margin: 3rem 0;
    font-size: 7.5rem;
    font-family: ${firstFont}, serif;
    font-weight: 500;
    @media (max-width: 425px) {
      font-size: 5rem;
    }
  }
`;

export const PortfolioDescription = styled.div`
  display: flex;
  justify-content: center;
  h4 {
    margin-bottom: 5rem;
    font-family: ${secondFont}, "sans-serif";
    font-weight: 400;
    color: #858585;
    width: 70%;
    font-size: 2rem;
    letter-spacing: 0.195em;
  }
`;
