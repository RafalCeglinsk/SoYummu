import React from "react";
import { slide as Menu } from "react-burger-menu";
import { CgClose } from "react-icons/cg";

import Nav from "../../Navigation/Navigation";

import { CloseButton } from "../Header.styled";
import { HamburgerContainer } from "./Hamburger.styled";

export const HamburgerMenu = ({ openState, handleCloseMenu }) => {
  
    const handleNavCloseMenu = () => {
        handleCloseMenu(); 
      };

  return (
    <Menu
      right
      bodyClassName={"modal-show"}
      width={"100%"}
      itemListElement="div"
      customBurgerIcon={false}
      isOpen={openState}
    >
      <HamburgerContainer>

        <CloseButton>
        <CgClose onClick={handleCloseMenu} />
        </CloseButton>

        <Nav  handleCloseMenu={handleNavCloseMenu} />

      </HamburgerContainer>
    </Menu>
  );
};
