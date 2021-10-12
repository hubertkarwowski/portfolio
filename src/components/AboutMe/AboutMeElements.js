import styled from "styled-components";
import { firstFont, secondFont, white } from "../../StyledVariables";
import mountains from "../../assets/mountains.png";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 167, 225, 0.7);
  background-size: cover;
  background-position: center;
  padding-bottom: 3rem;
`;
export const Title = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  h2 {
    font-family: ${firstFont}, "sans-serif";
    font-size: 4.8rem;
    letter-spacing: 0.2em;
    font-weight: 500;
    text-align: center;
    color: ${white};
    @media (max-width: 375px) {
      font-size: 4rem;
    }
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #003459;
  font-family: ${secondFont}, "sans-serif";
  width: 300px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 8rem;
  @media (max-width: 1386px) {
    margin: 0 3rem;
    width: 250px;
  }
  @media (max-width: 1024px) {
    margin: 2rem 0;
  }
`;

export const CardHeader = styled.div`
  h4 {
    font-family: ${firstFont}, "sans-serif";
    margin: 0 auto;
    font-size: 2rem;
    color: ${white};
    font-weight: 500;
    text-align: center;
  }
  i {
    width: 40%;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    svg {
      font-size: 4rem;
      color: ${white};
    }
  }
`;
export const CardBody = styled.div`
  h5 {
    margin: 5rem auto;
    color: ${white};
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    width: 80%;
  }
  i {
    margin: 3rem 2rem;
    @media (max-width: 1386px) {
      margin: 1rem 1rem;
    }
    svg {
      color: ${white};
      font-size: 6rem;
    }
  }
  ul {
    margin: 3rem 0;
    list-style-type: none;
    li {
      color: ${white};
      font-size: 2rem;
      font-weight: 300;
      text-align: center;
      svg {
        font-size: 2rem;
      }
    }
  }
`;
export const LastItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 4rem;
  @media (max-width: 1386px) {
    margin: auto;
  }
  i {
    svg {
      color: ${white};
      font-size: 7rem;
    }
  }
`;
