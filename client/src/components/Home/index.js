import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css'
//import pawPrints from '../../assets/5.png';
//import characters from '../../assets/14.jpeg';

const Home = () => {
    return (
        <div className="homepage">

            <div className="header">
                <h1>Creature <br /> C🐾mforts</h1>
                <h2>
                There's no place like home
                </h2>
                <br />
            </div>

            <div className="about">
                <h2>Our Mission</h2>
                {/* <img
                    src={pawPrints}
                    alt="paw prints"
                /> */}
                <h3>
                    Does your pet suffer from separation 
                    anxiety? Always come home from
                    the kennel sick and stressed? Do you
                    worry if they are given the proper love and 
                    attention that they need while you're gone?
                    Then you have come to the right place!
                    Creature Comforts was designed to provide
                    a better sense of security to both pets 
                    and owners by allowing your pet to stay
                    in the comfort of their own home while you're away.
                </h3>
            </div>

            <div className="links">
                <h2>Interested or have a question?</h2>
                <div className="sections">
                    <NavLink to="/prices">
                        <div className="section2">
                        Pet Prices
                        </div>
                    </NavLink>
                    <NavLink to="/contact">
                        <div className="section3">
                        Contact Us
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home;