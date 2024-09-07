import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='Contact-Us'>
            <h1>Contact Us</h1>
            <div className='Details'>
                <span className='Name'> 
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </span>
                <span className='Email'><input type="text" placeholder='Enter your email'/></span>
                <span><textarea name="" id="" placeholder='How can we help you!' ></textarea></span>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Contact;
