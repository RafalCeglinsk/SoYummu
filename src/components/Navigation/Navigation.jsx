import React from 'react';

import { NavLinkStyled } from './Navigation.styled';

const Nav = () => {
  return (
<>
      <li>
        <NavLinkStyled to="/categories" >
          Categories
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/add">
          Add Recipe
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/my">
          My Recipes
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/favorite" >
          Favorite
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/shoppingList">
          Shopping List
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/search?ingredients=">
    Search
        </NavLinkStyled>
      </li>
</>

  );
};

export default Nav;