import React from 'react'
import './price.css'
import characters from '../../assets/14.jpeg';

function Price() {
    return(
        <div className="price">
            <h1>Pet Prices</h1>
            <img 
                src={characters}
                alt="characters"
            />
        </div>
    )
}

export default Price;