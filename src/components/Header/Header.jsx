import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import Nav from "../Navigation/Navigation";
import UserLogoutModal from "./ProfileModal/ProfileModal";
import { useAuth } from "#hooks/useAuth";
import { StartLogoBig } from "../RenderSvg/RenderSvg";
import { HamburgerMenu } from "./Hamburger/Hamburger";

import {
  NavContainer,
  HamburgerButton,
  HeaderContainer,
  UserInfo,
  UserName,
  UserAvatar,
  RightWrapper,
} from "./Header.styled";
import useScrollingEffect from "#hooks/useScrollingEffect.js";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const location = useLocation();

  const { user } = useAuth();
  useScrollingEffect(".header", "scrolling");

  const toggleBurgerMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleUserModal = () => {
    setUserModalOpen(!isUserModalOpen);
  };

  return (
    <>
      {location.pathname !== "/auth/login" &&
        location.pathname !== "/auth/register" &&
        location.pathname !== "/" && (
          <>
            <HeaderContainer className="header">
              <NavLink to="/main">
                <StartLogoBig />
              </NavLink>

              <NavContainer>
                <Nav />
              </NavContainer>
              <RightWrapper>
                <UserInfo onClick={toggleUserModal}>
                  <UserAvatar src={user.avatar} />
                  <UserName>{user.name}</UserName>
                  {isUserModalOpen && <UserLogoutModal />}
                </UserInfo>

                <HamburgerButton>
                  <GiHamburgerMenu onClick={toggleBurgerMenu} />
                </HamburgerButton>
              </RightWrapper>
            </HeaderContainer>
            <HamburgerMenu
              openState={isMenuOpen}
              handleCloseMenu={toggleBurgerMenu}
            />
          </>
        )}
    </>
  );
};
