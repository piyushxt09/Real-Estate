import React from 'react';
import './Navbar.css';
import logo from '../assets/Images/logo.png'; 

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <img src={logo} alt="Logo" className="LogoImage" /> 
                    <div>
                        <a href="http://">Home</a>
                        <a href="http://">About</a>
                        <a href="http://">Services</a>
                        <a href="http://">Contact Us</a>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button type="button" class="btn btn-primary" style={{border: '1px solid var(--primary-color)', backgroundColor: 'var(--primary-color)'}}>Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
