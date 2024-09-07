import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Toggle Mobile Menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Handle Scroll Event to adjust Navbar height
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className='Logo'>
                    <Link to='/'><img src={logo} alt="Logo" className="LogoImage" /></Link>
                    <h2>Dream Homez</h2>
                </div>
                <div className={`Navbar ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="#">Services</a>
                    <a href="/ContactUs">Contact Us</a>
                </div>
                <div className='Buttons'>
                    <button className="schedule-btn">Schedule Visit</button>
                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? 'X' : '☰'}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
