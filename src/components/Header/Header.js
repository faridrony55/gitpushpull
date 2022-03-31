import React from 'react';
import {  NavLink } from "react-router-dom"; 
import './Style.css'

  
const Header = () => {
    return ( 
        <>
            <header>
                <div className='container grid grid-header'>
                    <div className='logo'>
                       <h1><a href='./'>LOGO</a></h1> 
                    </div>
                    <nav>
                        <ul className='d-flex'>
                            <li>
                                <NavLink to="./">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutus">About Us</NavLink>
                            </li> 
                            <li>
                                <NavLink to="/finance">Finance</NavLink>
                            </li> 
                            <li>
                                <NavLink to="/faq">Faq</NavLink>
                            </li> 
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li> 
                        </ul> 
                    </nav>
                </div>
            </header>
        </>
             
    );
};

export default Header;