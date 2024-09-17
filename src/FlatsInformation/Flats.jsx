import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
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
import bhk111 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0091.jpg'
import bhk112 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0092.jpg'
import bhk113 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0111.jpg'
import bhk114 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0112.jpg'
import bhk115 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0113.jpg'
import bhk116 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0114.jpg'
import bhk117 from '../assets/Images/FlatImages/real estate img4/IMG-20240916-WA0115.jpg'

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
import bhk211 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0061.jpg'
import bhk212 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0062.jpg'
import bhk213 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0063.jpg'
import bhk214 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0064.jpg'
import bhk215 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0065.jpg'
import bhk216 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0066.jpg'
import bhk217 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0067.jpg'
import bhk218 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0068.jpg'
import bhk219 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0069.jpg'
import bhk220 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0070.jpg'
import bhk221 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0071.jpg'
import bhk222 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0072.jpg'
import bhk223 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0073.jpg'
import bhk224 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0074.jpg'
import bhk225 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0075.jpg'
import bhk226 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0076.jpg'
import bhk227 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0080.jpg'
import bhk228 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0081.jpg'
import bhk229 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0085.jpg'
import bhk230 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0090.jpg'

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
import bhk316 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0109.jpg'
import bhk317 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0110.jpg'

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
import bhk416 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0019.jpg'
import bhk417 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0020.jpg'
import bhk418 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0021.jpg'
import bhk419 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0022.jpg'
import bhk420 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0023.jpg'
import bhk421 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0093.jpg'


import bhk2 from '../assets/Images/FlatImages/real estate img3/IMG-20240916-WA0052.jpg';
import bhk3 from '../assets/Images/FlatImages/real estate img5/IMG-20240916-WA0106.jpg';
import bhk4 from '../assets/Images/FlatImages/real estate img1/IMG-20240916-WA0004.jpg';

const Flats = () => {
    const { id } = useParams();
    console.log("Current ID:", id);

    const flatDetails = {
        "1bhk": {
            title: "1 BHK Flat",
            address: "Dwarka mor, New Delhi-110059",
            square: "500 Sq. Yards",
            information: "1 Balcony | 1 Washroom | 1 Bedroom | Car Parking",
            description: "This is a beautiful 1 BHK flat located Dwarka mor, offering spacious rooms and modern amenities.",
            images: [bhk11, bhk12, bhk13, bhk14, bhk15, bhk16, bhk17, bhk18, bhk19, bhk110, bhk111, bhk112, bhk113, bhk114, bhk115, bhk116, bhk117]
        },
        "2bhk": {
            title: "2 BHK Flat",
            address: "Dwarka mor, New Delhi-110059",
            square: "700 Sq. Yards",
            information: "1 Balcony | 2 Washroom | 2 Bedroom | Car Parking",
            description: "This 2 BHK flat is located at Dwarka mor, offering a great location with modern interiors.",
            images: [bhk21, bhk22, bhk23, bhk24, bhk25, bhk26, bhk27, bhk28, bhk29, bhk210, bhk211, bhk212, bhk213, bhk214, bhk215, bhk216, bhk217, bhk218, bhk219, bhk220, bhk221, bhk222, bhk223, bhk224, bhk225, bhk226, bhk227, bhk228, bhk229, bhk230] // Add images if available
        },
        "3bhk": {
            title: "3 BHK Flat",
            address: "Dwarka mor, New Delhi-110059",
            square: "1100 Sq. Yards",
            information: "2 Balcony | 2 Washroom | 3 Bedroom | Car Parking",
            description: "This 3 BHK flat is located at Dwarka mor, offering a great location with modern interiors.",
            images: [bhk31, bhk32, bhk33, bhk34, bhk35, bhk36, bhk37, bhk38, bhk39, bhk310, bhk311, bhk312, bhk313, bhk314, bhk315, bhk316, bhk317]
        },
        "4bhk": {
            title: "4 BHK Flat",
            address: "Dwarka mor, New Delhi-110059",
            square: "1100 Sq. Yards",
            information: "2 Balcony | 2 Washroom | 4 Bedroom | Car Parking",
            description: "This 4 BHK flat is located at Dwarka mor, offering a great location with modern interiors.",
            images: [bhk41, bhk42, bhk43, bhk44, bhk45, bhk46, bhk47, bhk48, bhk49, bhk410, bhk411, bhk412, bhk413, bhk414, bhk415, bhk416, bhk417, bhk418, bhk419, bhk420, bhk421]
        }

    };

    const flat = flatDetails[id];
    console.log("Flat Details:", flat);

    if (!flat) {
        return <div>Flat not found!</div>;
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flat.images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flat.images.length) % flat.images.length);
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };


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
            <i class="fa-brands fa-whatsapp"></i>
            <div className='Flats-info'>
                <div className="flat-images">
                    <button className="slide-btn prev-btn" onClick={prevImage}>❮</button>
                    <img src={flat.images[currentIndex]} alt={`Flat ${currentIndex + 1}`} />
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
            <div className="Most-Likely">
                <h2>Suggestion for you</h2>
                <div className='Images'>
                    <img src={bhk2} alt="" />
                    <img src={bhk3} alt="" />
                    <img src={bhk4} alt="" />
                </div>
            </div>
        </>

    );
}

export default Flats;