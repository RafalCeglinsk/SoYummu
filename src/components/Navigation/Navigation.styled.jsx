import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (min-width: 1440px) {
display: flex;
flex-direction: row;
gap: 30px;
}
`

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.36px;
  text-align: center;
  color: var(  --color-text-6);
  transition: color var(--transition-time) var(--cubic);


  &:hover,
  &.active {
    color: var(  --color-text-5);
  }
  `;


