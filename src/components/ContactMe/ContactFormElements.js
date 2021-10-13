import styled from "styled-components";
import { blue, firstFont, secondFont, white } from "../../StyledVariables";

export const Container = styled.div`
  *:focus {
    outline: none;
  }
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

export const FormName = styled.div`
  margin-bottom: 5rem;
  input {
    border: 2px solid ${blue};
    padding: 1rem;
    width: 50rem;
    height: 5rem;
    font-size: 3rem;
    border-radius: 5px;
    font-family: ${secondFont}, "sans-serif";
    @media (max-width: 1440px) {
      width: 35rem;
      font-size: 2rem;
    }
    @media (max-width: 460px) {
      width: 25rem;
      font-size: 2rem;
    }
  }
`;
export const FormEmail = styled.div`
  margin-bottom: 5rem;
  input {
    border: 2px solid ${blue};
    padding: 1rem;
    width: 50rem;
    height: 5rem;
    font-size: 3rem;
    border-radius: 5px;
    font-family: ${secondFont}, "sans-serif";
    @media (max-width: 1440px) {
      width: 35rem;
      font-size: 2rem;
    }
    @media (max-width: 460px) {
      width: 25rem;
      font-size: 2rem;
    }
  }
`;
export const FormText = styled.div`
  margin-bottom: 5rem;
  textarea {
    border: 2px solid ${blue};
    padding: 1rem;
    font-size: 3rem;
    width: 50rem;
    border-radius: 5px;
    font-family: ${secondFont}, "sans-serif";
    @media (max-width: 1440px) {
      width: 35rem;
      font-size: 2rem;
    }
    @media (max-width: 460px) {
      width: 25rem;
      font-size: 2rem;
    }
  }
`;
export const FormButton = styled.div`
  button {
    background-color: ${white};
    border: 2px solid ${blue};
    width: 50rem;
    height: 5rem;
    font-size: 4rem;
    color: ${blue};
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-weight: 700;
    :hover {
      background-color: #c2f0ff;
      color: #00529b;
    }
    @media (max-width: 1440px) {
      width: 35rem;
      font-size: 2rem;
    }
    @media (max-width: 460px) {
      width: 25rem;
      font-size: 2rem;
    }
  }
`;

export const Info = styled.div`
  margin-top: 2rem;
  background-color: #bde5f8;
  color: #00529b;
  width: 50rem;
  border: 2px solid #bde5f8;
  border-radius: 5px;
  h4 {
    font-family: ${firstFont}, "sans-serif";
    font-size: 4rem;
    text-align: center;
  }
`;
