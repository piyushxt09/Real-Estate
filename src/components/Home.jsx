import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Appartment1 from '../assets/Images/Apartment1.jpeg';
import Appartment2 from '../assets/Images/Apartment2.jpeg';
import Appartment3 from '../assets/Images/Apartment3.jpeg';
import Appartment4 from '../assets/Images/Apartment4.jpeg';
import Flat1 from '../assets/Images/Flat1.jpeg';
import Flat2 from '../assets/Images/Flat2.jpeg';
import Flat3 from '../assets/Images/Flat3.jpeg';
import Flat4 from '../assets/Images/Flat4.jpeg';
const Home = () => {

  const appartmentScrollRef = useRef(null);
  const flatsScrollRef = useRef(null);

  useEffect(() => {
    const scrollAppartment = appartmentScrollRef.current;
    const scrollFlats = flatsScrollRef.current;
    const scrollDuration = 2000; // 2 seconds

    const scrollInterval = setInterval(() => {
      const appartmentWidth = scrollAppartment.scrollWidth / scrollAppartment.children.length;
      const flatsWidth = scrollFlats.scrollWidth / scrollFlats.children.length;

      scrollAppartment.scrollBy({
        left: appartmentWidth,
        behavior: 'smooth'
      });

      scrollFlats.scrollBy({
        left: flatsWidth,
        behavior: 'smooth'
      });

      if (scrollAppartment.scrollLeft + scrollAppartment.clientWidth >= scrollAppartment.scrollWidth) {
        scrollAppartment.scrollLeft = 0;
      }

      if (scrollFlats.scrollLeft + scrollFlats.clientWidth >= scrollFlats.scrollWidth) {
        scrollFlats.scrollLeft = 0;
      }
    }, scrollDuration);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <div className="homeBack">
        <div className='headings'>
          <h1>
            The Leading Luxury
            <br />
            Real Estate In
            <br /> Delhi
          </h1>
          <p>
            Each rooms has been individually designed to maximise space and light. Smart home technology <br />installed as standard in each rooms putting you in total control of your <br /> home  at the touch of a  button from wherever<br />  you might be.
          </p>
          <Link to='/ContactUs'><button>Inquiry Now</button></Link>
        </div>
      </div>
      <div className="Projects">
        <h1>Explore Our Presidential Projects</h1>
        <div className='projects-Appartment'>
          <div className='image'>
          </div>
          <div className='heading'>
            <h1>Introducing A New <br />  Residential Complex</h1>
            <h4>Luxury Apartments</h4>
            <p>You are welcome to check out our house  gallery to make sure that all  apartments  are in prime condition which makes them a perfect living space.</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
      <div className='Appartments'>
      <div className='Appartment-details'>
        <div className='Appartment'>
          <h1>Appartments</h1>
          <div className='ImagesAp' ref={appartmentScrollRef}>
            <img src={Appartment1} alt="Apartment 1" />
            <img src={Appartment2} alt="Apartment 2" />
            <img src={Appartment3} alt="Apartment 3" />
            <img src={Appartment4} alt="Apartment 4" />
            {/* <img src={Appartment1} alt="Apartment 1" /> */}
          </div>
        </div>
        <div className='Flats'>
          <h1>Flats</h1>
          <div className='ImagesAp' ref={flatsScrollRef}>
            <img src={Flat1} alt="Flat 1" />
            <img src={Flat2} alt="Flat 2" />
            <img src={Flat3} alt="Flat 3" />
            <img src={Flat4} alt="Flat 4" />
            {/* <img src={Flat1} alt="Flat 1" /> */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;
