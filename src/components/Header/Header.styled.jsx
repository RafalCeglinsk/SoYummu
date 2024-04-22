import styled from "styled-components";


export const NavContainer=styled.div`
    
    display: none;
    @media (min-width: 1440px) {
    display: block;
  }
`
export const HamburgerButton=styled.div`
      cursor: pointer;
      position: absolute;
      right:20px;
      > svg {
    transition: color var(--transition-time) var(--cubic);
    color: inherit;
    width: 28px;
    height: 28px;
  }

      @media screen and (min-width: 1440px) {
    display: none;
  }

`

export const CloseButton = styled.div`
  cursor: pointer;
    position: absolute
    ;
    top: 10px;
    right: 30px;

    > svg {
    width: 30px;
    height: 30px;
    color: inherit;
  }

`