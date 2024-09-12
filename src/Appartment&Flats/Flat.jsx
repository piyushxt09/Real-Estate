import React from 'react'
import './Flat.css'
import Flatcon1 from '../assets/Images/Flatcon1.jpeg'
import Flatcon2 from '../assets/Images/Flatcon2.jpeg'
import Flatcon3 from '../assets/Images/Flatcon3.jpeg'
import Flatcon4 from '../assets/Images/Flatcon4.jpeg'

const Flat = () => {
    return (
        <>
            <div className='Flat-container'>
                <h1>Flats</h1>
            </div>
            <div className="FlatContent">

                <div className="ApartmentPhotos">
                    <div className='Photos'>
                        <img src={Flatcon1} alt="Description of image 1" />
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
                        <img src={Flatcon2} alt="Description of image 2" />
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
                        <img src={Flatcon3} alt="Description of image 3" />
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
                        <img src={Flatcon4} alt="Description of image 4" />
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

export default Flat
