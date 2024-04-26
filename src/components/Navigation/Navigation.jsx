import React from 'react';

import { NavLinkStyled, NavContainer } from './Navigation.styled';

const Nav = ({handleCloseMenu, isfooter}) => {
  return (
<nav>
 <NavContainer isfooter={isfooter}>

        <NavLinkStyled to="/categories" onClick={handleCloseMenu} isfooter={isfooter}>
          Categories
        </NavLinkStyled>
   

        <NavLinkStyled to="/add" onClick={handleCloseMenu} isfooter={isfooter}>
          Add Recipe
        </NavLinkStyled>


      <NavLinkStyled to="/my" onClick={handleCloseMenu} isfooter={isfooter}>
          My Recipes
        </NavLinkStyled>

        <NavLinkStyled to="/favorite" onClick={handleCloseMenu} isfooter={isfooter}>
          Favorite
        </NavLinkStyled>


        <NavLinkStyled to="/shoppingList" onClick={handleCloseMenu}isfooter={isfooter}>
          Shopping List
        </NavLinkStyled>


        <NavLinkStyled to="/search?ingredients=" onClick={handleCloseMenu}isfooter={isfooter}>
    Search
        </NavLinkStyled>

        </NavContainer>

        </nav>
  );
};

export default Nav;