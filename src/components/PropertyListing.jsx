import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './PropertyListing.css';
import bhk1 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0084.jpg';
import bhk2 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0052.jpg';
import bhk3 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0106.jpg';
import bhk4 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0004.jpg';
import bhk41 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0026.jpg';

const PropertyListing = () => {
    return (
        <div className='Property-listing'>
            {/* 1 BHK Flats */}
            <div className="flats1">
                <h1>1 BHK Flats</h1>
                <div className='Photos'>
                    <div className="image-container">
                        <Link to="/PropertyListing/1bhk">  {/* Link to the 1 BHK details page */}
                            <img src={bhk1} alt="1 BHK Flat" />
                        </Link>
                        <div className="overlay">
                            <div className="overlay-text">
                                <h3>1 BHK (500 Sq. Yards)</h3>
                                <p>Location: Dwarka Mor, New Delhi-110059</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2 BHK Flats */}
            <div className="flats2">
                <h1>2 BHK Flats</h1>
                <div className='Photos'>
                    <div className="image-container">
                        <Link to="/PropertyListing/2bhk">  {/* Link to the 2 BHK details page */}
                            <img src={bhk2} alt="2 BHK Flat" />
                        </Link>
                        <div className="overlay">
                            <div className="overlay-text">
                                <h3>2 BHK (700 Sq. Yards)</h3>
                                <p>Location: Dwarka Mor, New Delhi-110059</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3 BHK Flats */}
            <div className="flats3">
                <h1>3 BHK Flats</h1>
                <div className='Photos'>
                    <div className="image-container">
                        <Link to="/PropertyListing/3bhk">  {/* Link to the 3 BHK details page */}
                            <img src={bhk3} alt="3 BHK Flat" />
                        </Link>
                        <div className="overlay">
                            <div className="overlay-text">
                                <h3>3 BHK (1100 Sq. Yards)</h3>
                                <p>Location: Dwarka Mor, New Delhi-110059</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 BHK Flats */}
            <div className="flats4">
                <h1>4 BHK Flats</h1>
                <div className='Photos'>
                    <div className="image-container">
                        <Link to="/PropertyListing/4bhk">  {/* Link to the 4 BHK details page */}
                            <img src={bhk4} alt="4 BHK Flat" />
                        </Link>
                        <div className="overlay">
                            <div className="overlay-text">
                                <h3>4 BHK (1100 Sq. Yards)</h3>
                                <p>Location: Dwarka Mor, New Delhi-110059</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-container">
                        <Link to="/PropertyListing/4bhk1">  {/* Link to the 4 BHK details page */}
                            <img src={bhk41} alt="4 BHK Flat" />
                        </Link>
                        <div className="overlay">
                            <div className="overlay-text">
                                <h3>4 BHK (1100 Sq. Yards)</h3>
                                <p>Location: Dwarka Mor, New Delhi-110059</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyListing;
