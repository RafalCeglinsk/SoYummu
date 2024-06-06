import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  @media screen and (min-width: 768px) {
    padding: 18px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 18px 100px;
  }
  &.scrolling {
    height: 10px;
    opacity: 0.9;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 50px;
  }
`;
export const NavContainer = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
  }
`;
export const HamburgerButton = styled.div`
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 32px;
  }
  > svg {
    transition: color var(--transition-time) var(--cubic);
    color: inherit;
    width: 32px;
    height: 42px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
  &:hover,
  &:focus {
    color: var(--color-text-5);
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 32px;

  > svg {
    width: 28px;
    height: 28px;
    color: inherit;
  }
  &:hover,
  &:focus {
    color: var(--color-text-5);
  }
`;
export const UserInfo = styled.div`
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
`;
export const UserName = styled.span`
  font-size: 12px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const UserAvatar = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
  }
`;
