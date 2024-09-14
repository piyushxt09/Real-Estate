import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import PropertyListing from './components/PropertyListing';
import Schedule from './components/Schdule';
import Apartment from './Appartment&Flats/Apartment';
import Flat from './Appartment&Flats/Flat';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <Navbar /><Home /> <Footer /></>} />
        <Route path="/about" element={<> <Navbar /><AboutUs /> <Footer /></>} />
        <Route path="/ContactUs" element={<> <Navbar /><Contact /> <Footer /> </>} />
        <Route path="/PropertyListing" element={<> <Navbar /><PropertyListing /></>} />
        <Route path="/Schedule" element={<> <Navbar /><Schedule /> </>} />
        <Route path="/apartments" element={<> <Apartment /> </>} />
        <Route path="/flats" element={<> <Navbar /> <Flat /> </>} />
        {/* Add other routes here */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */} {/* Optional for 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
