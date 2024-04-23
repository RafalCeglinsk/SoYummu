import React from 'react';

import { NavLinkStyled, NavContainer } from './Navigation.styled';

const Nav = ({handleCloseMenu}) => {
  return (
<nav>
 <NavContainer>

        <NavLinkStyled to="/categories" onClick={handleCloseMenu}>
          Categories
        </NavLinkStyled>
   

        <NavLinkStyled to="/add">
          Add Recipe
        </NavLinkStyled>


      <NavLinkStyled to="/my">
          My Recipes
        </NavLinkStyled>

        <NavLinkStyled to="/favorite" >
          Favorite
        </NavLinkStyled>


        <NavLinkStyled to="/shoppingList">
          Shopping List
        </NavLinkStyled>


        <NavLinkStyled to="/search?ingredients=">
    Search
        </NavLinkStyled>

        </NavContainer>

        </nav>
  );
};

export default Nav;