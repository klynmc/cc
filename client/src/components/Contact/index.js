import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import './contact.css'

function Contact() {

    /* const [userData, setUserData] = useState({
        name: '', email: '', message: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(userData);
        setUserData({ name: '', email: '', message: ''})
    } */

    return(
        <div className="contact">
            {/* <h1>Contact Me</h1> */}
            <form className="contact-form" /* onSubmit={handleSubmit} */>
                <h2>Have a question or want to check availablitiy?</h2>
                <label htmlFor="name" className="name"> Your Full Name:</label>
                <input htmlFor="name" className="name" placeholder="Jane Doe" /* value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} */></input>

                <label htmlFor="email" className="email"> Your Email Address:</label>
                <input htmlFor="email" className="email" placeholder="janedoe@email.com" /* value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} */></input>

                <label htmlFor="message" className="message"> Message:</label>
                <textarea htmlFor="message" className="message" placeholder="What do you want to say?" /* value={userData.message} onChange={(e) => setUserData({ ...userData, message: e.target.value })} */></textarea>
                <div className="btns">
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default Contact;