import React from 'react'
import './price.css'
import characters from '../../assets/14.jpeg';
import { NavLink } from 'react-router-dom';

function Price() {
    return(
        <div className="price">
            <h1>Pet Packages</h1>
            <h3>*prices may vary due to customized requests*</h3>
            <div className="packages">
                <ul>
                    <li>
                        <h3>Basic Needs</h3>
                        <h4>$30 per day</h4>
                        1-2 pets
                        <br />
                        2-4 hours
                        <br />
                        <p>*Includes optional: walking, oral medication, for animals in training: practicing basic commands*</p>
                    </li>
                    <li>
                        <h3>Slumber Party!</h3>
                        <h4>$45 per day</h4>
                        1-2 pets 
                        <br />
                        4-6 hours
                        <br />
                        Overnight stay
                        <br />
                        <p>*Includes optional: +2hr stay, walking, oral medication, for animals in training: practicing basic commands*</p>
                    </li>
                    <li>
                        <h3>'Til the Cows Come Home</h3>
                        <h4>$50-$75 per day</h4>
                        Small/Medium sized farms
                        <br /> 
                        3-7 hours
                        <br />
                        <p>*Contact us for more information on what this package includes*</p>
                    </li>
                </ul>
            </div>
            <div className="contactForm">
                <h2>Want to schedule or have a question about pricing?</h2> 
                <NavLink to="/contact">
                🐾 Contact us here! 🐾
                </NavLink>
            </div>
            <img 
                src={characters}
                alt="characters with pets"
            />
        </div>
    )
}

export default Price;