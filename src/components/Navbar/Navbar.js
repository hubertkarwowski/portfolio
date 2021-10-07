import React from "react";
import {
  BurgerMenu,
  NavbarContainer,
  NavbarLink,
  NavbarLinkSpan,
  NavbarMenu,
  NavLogo,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <NavbarContainer>
      <NavLogo>HK</NavLogo>
      <NavbarMenu>
        <NavbarLink>
          <NavbarLinkSpan href="#portfolio">PORTFOLIO</NavbarLinkSpan>
        </NavbarLink>
        <NavbarLink>
          <NavbarLinkSpan href="#about">ABOUT</NavbarLinkSpan>
        </NavbarLink>
        <NavbarLink>
          <NavbarLinkSpan href="#contact">CONTACT</NavbarLinkSpan>
        </NavbarLink>
      </NavbarMenu>
      <BurgerMenu>
        <FaBars />
      </BurgerMenu>
    </NavbarContainer>
  );
}

export default Navbar;
