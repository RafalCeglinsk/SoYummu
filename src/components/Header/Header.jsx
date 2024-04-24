import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import { StartLogoBig } from "../RenderSvg/RenderSvg";
import { HamburgerMenu } from "./Hamburger/Hamburger";
import Nav from "../Navigation/Navigation";

import { NavContainer, HamburgerButton, HeaderContainer } from "./Header.styled";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <HeaderContainer>
      <NavLink to="/main" > <StartLogoBig/></NavLink>
   
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
      </HeaderContainer>
    </>
  );
};
