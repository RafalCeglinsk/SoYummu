import React from "react";

import { NavLinkStyled, NavContainer } from "./Navigation.styled";

const Nav = ({ handleCloseMenu, isHeader, isFooter }) => {
  return (
    <nav>
      <NavContainer className={isFooter ? "NavFooter" : ""}>
        <NavLinkStyled to="/categories" onClick={handleCloseMenu}>
          Categories
        </NavLinkStyled>

        <NavLinkStyled to="/add" onClick={handleCloseMenu}>
          Add Recipe
        </NavLinkStyled>

        <NavLinkStyled to="/my" onClick={handleCloseMenu}>
          My Recipes
        </NavLinkStyled>

        <NavLinkStyled to="/favorite" onClick={handleCloseMenu}>
          Favorites
        </NavLinkStyled>

        <NavLinkStyled to="/shoppingList" onClick={handleCloseMenu}>
          Shopping List
        </NavLinkStyled>

        <NavLinkStyled to="/search?ingredients=" onClick={handleCloseMenu}>
          Search
        </NavLinkStyled>
      </NavContainer>
    </nav>
  );
};

export default Nav;
