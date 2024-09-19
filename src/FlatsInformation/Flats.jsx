import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Flats.css';
import bhk11 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0084.jpg';
import bhk12 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0077.jpg'
import bhk13 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0078.jpg'
import bhk14 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0079.jpg'
import bhk15 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0083.jpg'
import bhk16 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0084.jpg'
import bhk17 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0086.jpg'
import bhk18 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0087.jpg'
import bhk19 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0088.jpg'
import bhk110 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0089.jpg'


import bhk21 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0024.jpg'
import bhk22 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0052.jpg'
import bhk23 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0053.jpg'
import bhk24 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0054.jpg'
import bhk25 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0055.jpg'
import bhk26 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0056.jpg'
import bhk27 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0057.jpg'
import bhk28 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0058.jpg'
import bhk29 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0059.jpg'
import bhk210 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0060.jpg'


import bhk31 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0094.jpg'
import bhk32 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0095.jpg'
import bhk33 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0096.jpg'
import bhk34 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0097.jpg'
import bhk35 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0098.jpg'
import bhk36 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0099.jpg'
import bhk37 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0100.jpg'
import bhk38 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0101.jpg'
import bhk39 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0102.jpg'
import bhk310 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0103.jpg'
import bhk311 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0104.jpg'
import bhk312 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0105.jpg'
import bhk313 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0106.jpg'
import bhk314 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0107.jpg'
import bhk315 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0108.jpg'


import bhk41 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0004.jpg'
import bhk42 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0005.jpg'
import bhk43 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0006.jpg'
import bhk44 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0007.jpg'
import bhk45 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0008.jpg'
import bhk46 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0009.jpg'
import bhk47 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0010.jpg'
import bhk48 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0011.jpg'
import bhk49 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0012.jpg'
import bhk410 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0013.jpg'
import bhk411 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0014.jpg'
import bhk412 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0015.jpg'
import bhk413 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0016.jpg'
import bhk414 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0017.jpg'
import bhk415 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0018.jpg'


import bhk2 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0052.jpg';
import bhk3 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0106.jpg';
import bhk4 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0004.jpg';

import bhk421 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0025.jpg'
import bhk422 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0026.jpg'
import bhk423 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0027.jpg'
import bhk424 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0028.jpg'
import bhk425 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0029.jpg'
import bhk426 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0030.jpg'
import bhk427 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0031.jpg'
import bhk428 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0032.jpg'
import bhk429 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0033.jpg'
import bhk4210 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0034.jpg'
import bhk4211 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0035.jpg'
import bhk4212 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0036.jpg'
import bhk4213 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0037.jpg'
import bhk4214 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0038.jpg'
import bhk4215 from '../assets/Images/FlatImages/real estate img2/IMG-20240916-WA0039.jpg'


const Flats = () => {
    const { id } = useParams();

    const flatDetails = {
        "1bhk": {
            title: "1 BHK Flat",
            address: "Dwarka mor, New Delhi-110059",
            square: "500 Sq. Yards",
            information: "1 Balcony | 1 Washroom | 1 Bedroom | Car Parking",
            description: "This is a beautiful 1 BHK flat located Dwarka mor, offering spacious rooms and modern amenities.",
            images: [bhk11, bhk12, bhk13, bhk14, bhk15, bhk16, bhk17, bhk18, bhk19, bhk110]
        },
        "2bhk": {
            title: "2 BHK Flat",
            address: "Dwarka mor, New Delhi-110059",
            square: "700 Sq. Yards",
            information: "1 Balcony | 2 Washroom | 2 Bedroom | Car Parking",
            description: "This 2 BHK flat is located at Dwarka mor, offering a great location with modern interiors.",
            images: [bhk21, bhk22, bhk23, bhk24, bhk25, bhk26, bhk27, bhk28, bhk29, bhk210]
        },
        "3bhk": {
            title: "3 BHK Flat",
            address: "Dwarka mor, New Delhi-110059",
            square: "1100 Sq. Yards",
            information: "2 Balcony | 2 Washroom | 3 Bedroom | Car Parking",
            description: "This 3 BHK flat is located at Dwarka mor, offering a great location with modern interiors.",
            images: [bhk31, bhk32, bhk33, bhk34, bhk35, bhk36, bhk37, bhk38, bhk39, bhk310, bhk311, bhk312, bhk313, bhk314, bhk315]
        },
        "4bhk": {
            title: "4 BHK Flat",
            address: "Dwarka mor, New Delhi-110059",
            square: "1100 Sq. Yards",
            information: "2 Balcony | 2 Washroom | 4 Bedroom | Car Parking",
            description: "This 4 BHK flat is located at Dwarka mor, offering a great location with modern interiors.",
            images: [bhk41, bhk42, bhk43, bhk44, bhk45, bhk46, bhk47, bhk48, bhk49, bhk410, bhk411, bhk412, bhk413, bhk414, bhk415]
        },
        "4bhk1": {
            title: "4 BHK Flat",
            address: "Dwarka mor, New Delhi-110059",
            square: "1100 Sq. Yards",
            information: "2 Balcony | 2 Washroom | 4 Bedroom | Car Parking",
            description: "This 4 BHK flat is located at Dwarka mor, offering a great location with modern interiors.",
            images: [bhk421, bhk422, bhk423, bhk424, bhk425, bhk426, bhk427, bhk428, bhk429, bhk4210, bhk4211, bhk4212, bhk4213, bhk4214, bhk4215]
        }
    };

    const flat = flatDetails[id];

    if (!flat) {
        return <div>Flat not found!</div>;
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flat.images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flat.images.length) % flat.images.length);
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Add WhatsApp shake logic
    const whatsappIcon = document.querySelector('.fa-whatsapp');
    function shakeIcon() {
        whatsappIcon.classList.add('shake');
        setTimeout(() => {
            whatsappIcon.classList.remove('shake');
        }, 500);
    }
    setInterval(shakeIcon, 5000);

    return (
        <>
            <i className="fa-brands fa-whatsapp"></i>
            <div className='Flats-info'>
                <div className="flat-images">
                    <button className="slide-btn prev-btn" onClick={prevImage}>❮</button>
                    <img src={flat.images[currentIndex]} alt={`Flat ${currentIndex + 1}`} onClick={() => openModal(currentIndex)} />
                    <button className="slide-btn next-btn" onClick={nextImage}>❯</button>
                </div>
                <div className="dot-container">
                    {flat.images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToImage(index)}
                        ></span>
                    ))}
                </div>
                <h1>{flat.title}</h1>
                <p style={{ fontSize: '20px' }}>{flat.information}</p>
                <h5>{flat.square}</h5>
                <p>{flat.address}</p>
                <h3>{flat.description}</h3>
            </div>

            {/* Modal for deep view */}
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={flat.images[currentIndex]} alt={`Flat ${currentIndex + 1} Full View`} />
                    </div>
                </div>
            )}

            <div className="Most-Likely">
                <h2>Suggestion for you</h2>
                <div className='Images'>
                    <Link to='/PropertyListing/1bhk'><img src={bhk2} alt="" /></Link>
                    <Link to='/PropertyListing/2bhk'><img src={bhk3} alt="" /></Link>
                    <Link to='/PropertyListing/3bhk'><img src={bhk4} alt="" /></Link>
                </div>
            </div>
        </>
    );
};

export default Flats;
