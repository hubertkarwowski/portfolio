import styled from "styled-components";
import { blue, firstFont, white } from "../../StyledVariables";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${blue};
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
