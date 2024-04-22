import React from "react";
import { useState } from "react";
import { HamburgerMenu } from "./Hamburger/Hamburger";
import Nav from "../Navigation/Navigation";


export const Header = ()=>{
    const [isMenuOpen, setMenuOpen] = useState(false);



    const toggleBurgerMenu = () => {
        setMenuOpen(!isMenuOpen);
      };

    return(
        <>
        <Nav/>
        <button onClick={toggleBurgerMenu} >
         Hamburger
          </button>
        <HamburgerMenu
         openState={isMenuOpen}
         handleCloseMenu={toggleBurgerMenu}
   />
        
        </>
    )
}