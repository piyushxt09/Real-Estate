import React from 'react';
import './Navbar.css';
import logo from '../assets/Images/logo.png';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className='Logo'>
                    <img src={logo} alt="Logo" className="LogoImage" />
                    <h2>Dream Homez</h2>
                </div>
                <div className='Navbar'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact Us</a>
                </div>
                <div>
                    <button>Schedule Visit</button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
