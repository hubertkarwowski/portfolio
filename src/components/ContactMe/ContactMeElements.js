import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 80%;
  margin: 10rem auto;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
