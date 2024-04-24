import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { StartLogoBig } from "../RenderSvg/RenderSvg";
import { HamburgerMenu } from "./Hamburger/Hamburger";
import Nav from "../Navigation/Navigation";

import {
  NavContainer,
  HamburgerButton,
  HeaderContainer,
} from "./Header.styled";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleBurgerMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {location.pathname !== "/auth/login" &&
        location.pathname !== "/auth/register" &&
        location.pathname !== "/" && (
          <HeaderContainer>
            <StartLogoBig />
            <NavContainer>
              <Nav />
            </NavContainer>
            <HamburgerButton>
              <GiHamburgerMenu onClick={toggleBurgerMenu} />
            </HamburgerButton>

            <HamburgerMenu
              openState={isMenuOpen}
              handleCloseMenu={toggleBurgerMenu}
            />
          </HeaderContainer>
        )}
    </>
  );
};
