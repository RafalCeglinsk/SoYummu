import React from 'react'
import { slide as Menu } from 'react-burger-menu'

import Nav from '../../Navigation/Navigation'

export const HamburgerMenu = ({openState})=>{
    return(
<Menu
right
bodyClassName={'modal-show'}
width={'100%'}
itemListElement="div"
customBurgerIcon={false}
isOpen={openState}>

<div>
    <Nav/>
</div>

</Menu>

    )
}