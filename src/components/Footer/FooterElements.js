import styled from "styled-components";
import { blue, firstFont, white } from "../../StyledVariables";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 167, 225, 0.6);
  p {
    font-family: ${firstFont}, "sans-serif";
    padding: 5rem;
    font-size: 2rem;
    color: ${white};
    text-align: center;
    @media (max-width: 460px) {
      font-size: 1.5rem;
    }
  }
`;
