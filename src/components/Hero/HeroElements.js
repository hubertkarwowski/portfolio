import styled from "styled-components";
import mountains from "../../assets/mountains.png";

export const HeroSection = styled.section`
  background-image: url(${mountains});
  background-size: cover;
  background-position: bottom;
  height: 80vh;
  display: flex;
  flex-direction: column;
  :after {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    z-index: 0;
    background-color: rgba(0, 167, 225, 0.5);
  }
`;
export const HeroDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeroName = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    position: absolute;
    font-size: 7.2rem;
    font-family: "Manuale", serif;
    font-weight: 400;
    color: #fff;
    z-index: 10;
    text-align: center;
    margin-top: 18rem;
    @media (max-width: 657px) {
      font-size: 5rem;
    }
    @media (max-width: 425px) {
      font-size: 4rem;
    }
  }
`;
export const HeroAboutMe = styled.div`
  display: flex;
  justify-content: center;
  h4 {
    width: 40%;
    font-family: "Poppins", sans-serif;
    position: absolute;
    font-size: 2.5rem;
    font-weight: 400;
    color: #fff;
    z-index: 10;
    margin-top: 30rem;
    font-weight: 300;
    text-align: center;
    @media (max-width: 1024px) {
      width: 70%;
    }
    @media (max-width: 375px) {
      margin-top: 34rem;
      width: 100%;
    }

    span {
      font-weight: 700;
      font-size: 2.5rem;
    }
  }
`;
export const HeroButton = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    position: absolute;
    font-size: 2.5rem;
    font-weight: 400;
    z-index: 10;
    margin-top: 43rem;
    font-weight: 300;
    text-align: center;
    border: 2px solid #ffffff;
    padding: 2rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    &:hover {
      background-color: rgba(234, 234, 234, 0.3);
      border-radius: 4rem 0.5rem;
    }
    @media (max-width: 768px) {
      margin-top: 50rem;
    }
    @media (max-width: 425px) {
      margin-top: 55rem;
    }
  }
`;
