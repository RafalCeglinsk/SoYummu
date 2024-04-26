import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:${({ isfooter }) => (isfooter ? "24px" : "40px")};
padding-top: ${({ isfooter }) => (isfooter ? "0px" : "15vw")};


@media (min-width: 1440px) {
display: flex;
flex-direction: ${({ isfooter }) => (isfooter ? "column" : "row")};
gap:${({ isfooter }) => (isfooter ? "24px" : "40px")};
padding-top:0px;
}

`


export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size:${({ isfooter }) => (isfooter ? "14px" : "18px")};
  letter-spacing: -0.36px;

  color: ${({ isfooter }) => (isfooter ? "white" :" var(--color-text-6)")};
  transition: color var(--transition-time) var(--cubic);


  &:hover,&:focus,
  &.active {
    color: var(  --color-text-5);
  }
  `;


