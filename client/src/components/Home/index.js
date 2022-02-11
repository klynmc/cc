import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css'

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
            <h2>
                Does your pet suffer from separation 
                anxiety? Always come home from
                the kennel sick and stressed? Do you
                worry if they are given the proper love and 
                attention that they need?
                Creature Comforts was designed to provide
                a better sense of security to both pets 
                and owners by allowing your pet to stay
                in the comfort of their own home while you're away.
            </h2>
            </div>
            <div className="sections">
                <section className="section1">
                    <NavLink to="/about-me">
                        About Me
                    </NavLink>
                </section>
                <section className="section2">
                    <NavLink to="/prices">
                        Pet Prices
                    </NavLink>
                </section>
                <section className="section3">
                    <NavLink to="/contact">
                        Contact Me
                    </NavLink>
                </section>
            </div>
        </div>
    )
}

export default Home;