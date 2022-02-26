import React from 'react'
import './price.css'
import characters from '../../assets/14.jpeg';

function Price() {
    return(
        <div className="price">
            <h1>Pet Packages</h1>
            <h3>*prices may vary due to customized requests*</h3>
            <div className="packages">
                <ul>
                    <li>
                        <h3>Basic Needs: $30 per day</h3>
                        1-2 pets
                        <br />
                        2-4 hours
                        <br />
                        *Optional: walking, oral medication, for animals in training: practice basic commands
                    </li>
                    <li>
                        <h3>Package 2</h3>
                    </li>
                    <li>
                        <h3>Package 3</h3>
                    </li>
                </ul>
            </div>
            <img 
                src={characters}
                alt="characters with pets"
            />
        </div>
    )
}

export default Price;