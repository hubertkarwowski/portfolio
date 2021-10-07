import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 10rem;
  width: 100%;
  background-color: black;
  z-index: 100;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

export const NavLogo = styled.div`
  font-family: "Manuale", serif;
  font-size: 6.4rem;
  letter-spacing: -0.325em;
  margin: 0 16rem;
  padding: 0;
  @media (max-width: 882px) {
    margin: 0 8rem;
  }
  @media (max-width: 425px) {
    margin: 0 1rem;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  margin-right: 10rem;
`;

export const NavbarLink = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 4rem;
  padding: 0;
  text-decoration: none;
  font-weight: bold;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavbarLinkSpan = styled.a`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  font-size: 2rem;
  border-bottom: 0.4rem solid transparent;
  margin-top: 0.4rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 0.4rem solid #fff;
  }
`;
/*do zrobienia */
export const BurgerMenu = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin-right: 4rem;
  display: none;

  svg {
    font-size: 4rem;
    cursor: pointer;
  }
`;
