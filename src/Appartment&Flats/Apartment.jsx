import React from 'react'
import './Apartment.css'
import ApartmentCon1 from '../assets/Images/ApartmentCon1.jpeg'
import ApartmentCon2 from '../assets/Images/ApartmentCon2.jpeg'
import ApartmentCon3 from '../assets/Images/ApartmentCon3.jpeg'
import ApartmentCon4 from '../assets/Images/ApartmentCon4.jpeg'

const Apartment = () => {
    return (
        <>
            <div className='Appartments-container'>
                <h1>Apartments</h1>
            </div>
            <div className="FlatContent">
                <div className="ApartmentPhotos">
                    <div className='Photos'>
                        <img src={ApartmentCon1} alt="Description of image 1" />
                        <div className="Photo">
                            <h1>Monterey</h1>
                            <p>house for families, luxury</p>
                            <div>
                                <p>Area: 76.87</p>
                                <hr />
                                <p>Beds:3 Baths: 3 Garages: 1</p>
                                <hr />
                                <p>825 Casanova Ave, CA</p>
                                <hr />
                                <p>
                                    Added: 24.04.2023
                                </p>
                                <hr />

                            </div>
                        </div>
                    </div>
                    <div className='Photos'>
                        <img src={ApartmentCon2} alt="Description of image 2" />
                        <div className="Photo">
                            <h1>Sea Breeze</h1>
                            <p>house for families, luxury</p>
                            <div>
                                <p>Area: 76.87</p>
                                <hr />
                                <p>Beds:3 Baths: 3 Garages: 1</p>
                                <hr />
                                <p>825 Casanova Ave, CA</p>
                                <hr />
                                <p>
                                    Added: 24.04.2023
                                </p>
                                <hr />

                            </div>
                        </div>
                    </div>
                    <div className='Photos'>
                        <img src={ApartmentCon3} alt="Description of image 3" />
                        <div className="Photo">
                            <h1>Vista</h1>
                            <p>house for families, luxury</p>
                            <div>
                                <p>Area: 76.87</p>
                                <hr />
                                <p>Beds:3 Baths: 3 Garages: 1</p>
                                <hr />
                                <p>825 Casanova Ave, CA</p>
                                <hr />
                                <p>
                                    Added: 24.04.2023
                                </p>
                                <hr />

                            </div>
                        </div>
                    </div>
                    <div className='Photos'>
                        <img src={ApartmentCon4} alt="Description of image 4" />
                        <div className="Photo">
                            <h1>Sunrise</h1>
                            <p>house for families, luxury</p>
                            <div>
                                <p>Area: 76.87</p>
                                <hr />
                                <p>Beds:3 Baths: 3 Garages: 1</p>
                                <hr />
                                <p>825 Casanova Ave, CA</p>
                                <hr />
                                <p>
                                    Added: 24.04.2023
                                </p>
                                <hr />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="News">
                    <h1>Latest News</h1>
                </div>
            </div>
        </>
    )
}

export default Apartment
