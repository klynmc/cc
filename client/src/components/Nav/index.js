import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import logo from '../../assets/logo.jpeg';

const Nav = () => {
    return(
        <div className="nav">
            <header>
            <NavLink to="/">
            <img
              src={logo}
              alt="logo of c.c."
            ></img>
            {/* Home */}
            </NavLink>
            </header>
            <nav>
                <ul>
                    <li>
                    <NavLink to="/prices">
                        Pet Prices
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact">
                        Contact Me
                    </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Nav;