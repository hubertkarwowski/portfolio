import styled from "styled-components";
import { blue, firstFont, secondFont } from "../../StyledVariables";

export const Container = styled.div`
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Title = styled.div`
  h2 {
    font-size: 10rem;
    font-family: ${firstFont}, "sans-serif";
    font-weight: 600;
    color: ${blue};
    @media (max-width: 1440px) {
      font-size: 7rem;
    }
    @media (max-width: 460px) {
      margin: 2rem 0;
      font-size: 4rem;
      text-align: center;
    }
  }
`;
export const Description = styled.div`
  h4 {
    font-family: ${secondFont}, "sans-serif";
    font-size: 2rem;
    letter-spacing: 0.195em;
    font-weight: 500;
    color: #939393;
    width: 80%;
    @media (max-width: 1024px) {
      text-align: center;
      width: 100%;
    }
  }
`;
export const Icons = styled.div`
  margin-top: 5rem;
  @media (max-width: 1440px) {
    margin-left: 5rem;
  }
  h4 {
    margin-bottom: 2rem;
    font-family: ${secondFont}, "sans-serif";
    color: #939393;
    letter-spacing: 0.195em;
    font-size: 3.4rem;
    font-weight: 500;
    @media (max-width: 1440px) {
      font-size: 1.8rem;
    }
    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }
    @media (max-width: 1024px) {
      font-size: 2rem;
      text-align: center;
    }
    @media (max-width: 460px) {
      font-size: 1.5rem;
    }
    @media (max-width: 375px) {
      font-size: 1.2rem;
    }
  }
  i {
    position: absolute;
    transform: translateX(-7rem);
    @media (max-width: 1440px) {
      transform: translateX(-3rem);
    }
    @media (max-width: 1024px) {
      transform: translateX(-6rem);
    }
    @media (max-width: 768px) {
      transform: translateX(-4rem);
    }
    @media (max-width: 460px) {
      transform: translateX(-3rem);
    }
    svg {
      color: ${blue};
      font-size: 6rem;
      @media (max-width: 1440px) {
        font-size: 3rem;
      }
      @media (max-width: 1024px) {
        font-size: 5rem;
      }
      @media (max-width: 768px) {
        font-size: 3rem;
      }
    }
  }
`;
