import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Upper'>
                <div>
                    <i className="fa-solid fa-phone"></i>
                    <p>(+91) 7428191134 || 7428191139</p>
                </div>
                <div>
                    <i className="fa-solid fa-envelope"></i>
                    <p>rschauhanrealtors@gmail.com</p></div>
                <div>
                    <i className="fa-solid fa-location-dot"></i>
                    <p className='Location'>18 & 19 Mohan Garden Uttam Nagar, New Delhi 110059 (Near Dwarka Mor).</p>
                </div>
            </div>
            <div className="Middle">
                <div>
                    <h1>About</h1>
                    <p>Our story</p>
                    <p>Awards</p>
                    <p>Our Team</p>
                    <p>Career</p>
                </div>
                <div>
                    <h1>Company</h1>
                    <p>Our Services</p>
                    <p>Clients</p>
                    <p>Contact</p>
                    <p>Press</p>
                </div>
                <div>
                    <h1>Resources</h1>
                    <p>Blog</p>
                    <p>Newsletter</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='InputField'>
                    <h1>Subscribe</h1>
                    <div>
                        <input type="text" placeholder='Enter email address' /><button>Subscribe</button>
                    </div>
                    <h6>Get digital marketing updates in your mailbox</h6>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer
