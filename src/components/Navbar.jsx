import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
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
                    {isMobileMenuOpen && (
                        <button className="close-btn" onClick={toggleMobileMenu}>X</button>
                    )}
                    <Link to='/'><a href="#">Home</a></Link>
                    <Link to='/about'><a href="/about">About</a></Link>
                    <Link to='/Services'> <a href="#">Services</a></Link>
                    <Link to='/ContactUs'><a href="#">Contact Us</a></Link>
                </div>
                <div className='Buttons'>
                    <Link to='/Schedule'><button className="schedule-btn">Schedule A Visit</button></Link>
                    {!isMobileMenuOpen && (
                        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? 'X' : '☰'}
                        </button>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
