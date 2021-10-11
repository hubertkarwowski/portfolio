import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fafafa;
  padding: 5rem 0;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ProjectInfoTitle = styled.div`
  margin-bottom: 3rem;
  h2 {
    font-family: "Manuale", serif;
    font-weight: 400;
    font-size: 4rem;
    border-bottom: 2px solid #e4e4e4;
  }
`;

export const ProjectInfoDescription = styled.div`
  width: 55%;
  text-align: center;
  margin-bottom: 3rem;
  @media (max-width: 320px) {
    width: 100%;
  }
  h4 {
    font-family: "Poppins", "sans-serif";
    font-weight: 400;
    font-size: 2rem;
  }
`;
export const ProjectInfoButtons = styled.div`
  display: flex;
  @media (max-width: 1247px) {
    flex-direction: column;
  }
`;
export const ProjectInfoButton = styled.div`
  font-family: "Poppins", "sans-serif";
  margin: 0 2rem;
  @media (max-width: 1247px) {
    margin: 2rem 2rem;
  }

  i {
    margin: 0 3rem;
    svg {
      position: absolute;
      transform: translateY(0.5rem) translateX(-1rem);
      font-size: 3rem;
      color: black;
      @media (max-width: 768px) {
        transform: translateY(-0.2rem) translateX(-1.8rem);
      }
    }
  }
  a {
    text-decoration: none;
    color: #00a7e1;
    font-size: 2.8rem;
    border: 2px solid #00a7e1;
    border-radius: 5px;
    padding: 1rem;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;
export const ProjectImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  img {
    max-width: 500px;
    @media (max-width: 768px) {
      max-width: 350px;
    }
    @media (max-width: 360px) {
      max-width: 300px;
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
