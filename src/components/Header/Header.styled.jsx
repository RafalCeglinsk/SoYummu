import styled from "styled-components";


export const HeaderContainer=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media (min-width: 1440px) {
padding: 10px 100px;
}
`

export const NavContainer=styled.div`
    
    display: none;
    @media (min-width: 1440px) {
    display: flex;
    
  }
`
export const HamburgerButton=styled.div`
      cursor: pointer;
      position: absolute;
      right:20px;
      > svg {
    transition: color var(--transition-time) var(--cubic);
    color: inherit;
    width: 32px;
    height:42px;
  }

      @media screen and (min-width: 1440px) {
    display: none;
  }
  &:hover,&:focus
  {
    color: var(  --color-text-5);
  }

`

export const CloseButton = styled.div`
  cursor: pointer;
    position: absolute
    ;
    top: 15px;
    right: 32px;

    > svg {
    width: 28px;
    height: 28px;
    color: inherit;
  }
  &:hover,&:focus
  {
    color: var(  --color-text-5);
  }

`