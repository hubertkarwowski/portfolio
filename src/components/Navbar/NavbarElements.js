import styled from "styled-components";

export const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 100px;
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
`;

export const NavbarMenu = styled.nav`
  display: flex;
  margin-right: 10rem;
`;

export const NavbarLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 4rem;
  padding: 0;
  text-decoration: none;
  font-weight: bold;
`;
export const NavbarLinkSpan = styled.a`
  display: inline-block;
  font-size: 2rem;
  border-bottom: 0.4rem solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 0.4rem solid #fff;
  }
`;
