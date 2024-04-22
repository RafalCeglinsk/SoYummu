import React from 'react';

import { NavLinkStyled, NavContainer } from './Navigation.styled';

const Nav = () => {
  return (
<>
 <NavContainer>
        <NavLinkStyled to="/categories" >
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
</>

  );
};

export default Nav;