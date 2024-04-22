import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { HamburgerMenu } from "./Hamburger/Hamburger";
import Nav from "../Navigation/Navigation";

import { NavContainer, HamburgerButton } from "./Header.styled";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavContainer>
      
        <Nav />
      </NavContainer>
      <HamburgerButton>

        <GiHamburgerMenu onClick={toggleBurgerMenu}/>

      </HamburgerButton>

      <HamburgerMenu
        openState={isMenuOpen}
        handleCloseMenu={toggleBurgerMenu}
      />
    </>
  );
};
