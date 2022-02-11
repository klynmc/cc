import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css'

const Home = () => {
    return (
        <div className="homepage">
            <h1>Home Page</h1>
            <div className="sections">
                <section className="section1">
                    About Me
                    {/* <NavLink>
                        About Me
                    </NavLink> */}
                </section>
                <section className="section2">
                    Pet Prices
                    {/* <NavLink>
                        Pet Prices
                    </NavLink> */}
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