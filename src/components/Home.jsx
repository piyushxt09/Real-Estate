import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NotificationPopup from './Notification';

import './Home.css'
import Flat1 from '../assets/Images/Flat1.jpeg';
import Flat2 from '../assets/Images/Flat2.jpeg';
import Flat3 from '../assets/Images/Flat3.jpeg';
import Flat4 from '../assets/Images/Flat4.jpeg';

import Flatmod1 from '../assets/Images/Flatmod1.jpeg';
import Flatmod2 from '../assets/Images/Flatmod2.jpeg';
import Appartmentmod1 from '../assets/Images/Appartmentmod1.jpeg'
import Appartmentmod2 from '../assets/Images/Appartmentmod2.jpeg'

import News1 from '../assets/Images/News1.jpeg';
import News2 from '../assets/Images/News2.jpeg';
import News3 from '../assets/Images/News3.jpeg';


const Home = () => {

  const navigate = useNavigate();

  const [showNotification, setShowNotification] = useState(false);
  const appartmentScrollRef = useRef(null);
  const flatsScrollRef = useRef(null);

  const whatsappIcon = document.querySelector('.fa-whatsapp');
  function shakeIcon() {
    whatsappIcon.classList.add('shake');
    setTimeout(() => {
      whatsappIcon.classList.remove('shake');
    }, 500);
  }
  setInterval(shakeIcon, 5000);

  const handleClickApartment = () => {
    navigate('/apartments')
  }
  const handleClickFlat = () => {
    navigate('/flats')
  }

  useEffect(() => {
    const scrollFlats = flatsScrollRef.current;
    const scrollDuration = 2000; // 2 seconds

    const scrollInterval = setInterval(() => {

      const flatsWidth = scrollFlats.scrollWidth / scrollFlats.children.length;


      scrollFlats.scrollBy({
        left: flatsWidth,
        behavior: 'smooth'
      });


      if (scrollFlats.scrollLeft + scrollFlats.clientWidth >= scrollFlats.scrollWidth) {
        scrollFlats.scrollLeft = 0;
      }
    }, scrollDuration);

    return () => clearInterval(scrollInterval);
  }, []);


  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: window.innerWidth, // Scroll by the width of the viewport
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  };



  useEffect(() => {
    // Timer to show the notification after 2 minutes
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2000); // 120000ms = 2 minutes

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Handle closing the notification popup
  const handleIgnore = () => {
    setShowNotification(false);

    // Reset the notification to show again after 2 minutes if desired
    setTimeout(() => {
      setShowNotification(true);
    }, 60000);
  };



  return (
    <>
      <i class="fa-brands fa-whatsapp"></i>
      {/* -----------------------------home page ------------------------------------ */}
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

      {/* ---------------------projects section ----------------------------------------- */}

      <div className="Projects">
        <h1>Explore Our Presidential Projects</h1>
        <div className='projects-Appartment'>
          <div className='image'>
          </div>
          <div className='heading'>
            <h1>Introducing A New <br />  Residential Complex</h1>
            <h4>Luxury Flats</h4>
            <p>You are welcome to check out our house  gallery to make sure that all  apartments  are in prime condition which makes them a perfect living space.</p>
            <button>Read more</button>
          </div>
        </div>
      </div>


      {/* ---------------------------------appartments------------------------------------------- */}
      <div className='Appartments'>
        <div className='Appartment-details'>
          <div className='Flats'>
            <h1>Flats</h1>
            <div className='ImagesAp' ref={flatsScrollRef} onClick={handleClickFlat} style={{ cursor: 'pointer' }}>
              <img src={Flat1} alt="Flat 1" />
              <img src={Flat2} alt="Flat 2" />
              <img src={Flat3} alt="Flat 3" />
              <img src={Flat4} alt="Flat 4" />
            </div>
          </div>
        </div>
      </div>


      {/* ----------------------plans---------------------------------------- */}
      <div className="app-container">
        <h1 className="Flatsw">Flat Plans</h1>
        <div className='Flats-section'>
          <div className="image-container">
            <div className="PlanA">
              <h1> <u>  Plan A </u></h1>
              <p>Bedrooms : 3</p>
              <hr />
              <p>Bathrooms : 2</p>
              <hr />
              <p>Area Size : 80.10</p>
              <hr />
              <p>Garages : 1</p>
              <hr />
              <p>$ : $35,000/square m</p>
            </div>
            <img src={Flatmod1} alt="Flat Plan 1" />
          </div>
          <div className="image-container">
            <div className="PlanA">
              <h1> <u>  Plan B </u></h1>
              <p>Bedrooms : 3</p>
              <hr />
              <p>Bathrooms : 2</p>
              <hr />
              <p>Area Size : 80.10</p>
              <hr />
              <p>Garages : 1</p>
              <hr />
              <p>$ : $35,000/square m</p>
            </div>
            <img src={Flatmod2} alt="Flat Plan 2" />
          </div>
        </div>
      </div>


      {/* ----------------------insfrastructure---------------------------- */}
      <div className='Infrastructure'>
        <div className='heading'>
          <h1>Infrastructure</h1>
          <p>The complex has a kindergarden charging for electric vehicles, eco market, park, fitness center, and much more. </p>
        </div>
        <div className='First-Infra'>
          <div>
            <i class="fa-solid fa-child"></i>
            <h4>Kindergarden</h4>
          </div>
          <div>
            <i class="fa-solid fa-car"></i>
            <h4>Charging Vehicles</h4>
          </div>
          <div>
            <i class="fa-solid fa-heart"></i>
            <h4>Fitness</h4>
          </div>
          <div>
            <i class="fa-solid fa-shop"></i>
            <h4>Eco Market</h4>
          </div>
        </div>
        <div className='First-Infra'>
          <div>
            <i class="fa-solid fa-square-parking"></i>
            <h4>Parking</h4>
          </div>
          <div>
            <i class="fa-solid fa-utensils"></i>
            <h4>Resturents</h4>
          </div>
        </div>
      </div>

      {/* -----------------------------------Latest News -------------------------------- */}
      <div className="Latest-News">
        <div className="heading">
          <h1>Latest News</h1>
        </div>
        <div className='NewsAbout'>
          <div className="NewsDiv">
            <img src={News1} alt="" />
            <p>20 Apr, 2019</p>
            <h2>Start Of Installation Of Water And Heating</h2>
            <h5>The construction of ‘Sunny Season’ apartment complex is almost completed and real estate agents are ready to consult clients</h5>
          </div>
          <div className="NewsDiv">
            <img src={News2} alt="" />
            <p>20 Apr, 2019</p>
            <h2>Installation Of Internal Engineering Networks</h2>
            <h5>Smart Home Technology installed in each apartment allows the owner to control their home in the most convenient and quick way</h5>
          </div>
          <div className="NewsDiv">
            <img src={News3} alt="" />
            <p>20 Apr, 2019</p>
            <h2>Our Sales Office Holiday Schedule</h2>
            <h5>Our agency centers are located throughout the entire country ensuring you get help almost in every place anytime</h5>
          </div>
        </div>
      </div>

      {showNotification && (
        <NotificationPopup onClose={handleIgnore} />
      )}
    </>
  )
}

export default Home;
