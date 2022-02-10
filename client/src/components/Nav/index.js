import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return(
        <div className="nav">
            <nav>
                <ul>
                    <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Nav;