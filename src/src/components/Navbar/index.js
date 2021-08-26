import React from 'react';

//import { BiSearchAlt2 } from "react-icons/";
import {
    Nav, 
    NavLink,
    Bars,
    NavMenu,
    //NavBtn,
    //NabBtnLink,
} from './NavbarElements';

const Navbar = () =>{
    return(
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to = '/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to = '/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to = '/testimonials' activestyle>
                        Testimonials
                    </NavLink>
                    <NavLink to = '/contact' activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;