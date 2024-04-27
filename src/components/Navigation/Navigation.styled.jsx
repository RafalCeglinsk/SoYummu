import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding-top: 15vw;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding-top: 0px;
  }
  &.NavFooter {
    flex-direction: column;
    padding-top: 0px;
    gap: 14px;
    @media (min-width: 1440px) {
      gap: 24px;
    }
  }
  &.NavFooter > a {
    color: var(--color-text-7);
    font-size: 14px;
    letter-spacing: -2%;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.36px;

  color: var(--color-text-6);
  transition: color var(--transition-time) var(--cubic);

  &:hover,
  &:focus,
  &.active {
    color: var(--color-text-5);
  }
`;
