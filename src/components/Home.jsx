import React from 'react'
import './Home.css'
const Home = () => {
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
          <button>Inquiry Now</button>
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
            <p>You are welcome to check out our house  gallery to make sure that all  <br /> apartments  are in prime condition which makes them a perfect living space.</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
