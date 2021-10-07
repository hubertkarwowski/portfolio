import React from "react";
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinkSpan,
  NavbarMenu,
  NavLogo,
} from "./NavbarElements";

function Navbar() {
  return (
    <NavbarContainer>
      <NavLogo>HK</NavLogo>
      <NavbarMenu>
        <NavbarLink>
          <NavbarLinkSpan>PORTFOLIO</NavbarLinkSpan>
        </NavbarLink>
        <NavbarLink>
          <NavbarLinkSpan>ABOUT</NavbarLinkSpan>
        </NavbarLink>
        <NavbarLink>
          <NavbarLinkSpan>CONTACT</NavbarLinkSpan>
        </NavbarLink>
      </NavbarMenu>
    </NavbarContainer>
  );
}

export default Navbar;
