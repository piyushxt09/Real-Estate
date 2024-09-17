import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import PropertyListing from './components/PropertyListing';
import Schedule from './components/Schdule';
import Flat from './Appartment&Flats/Flat';
import Flats from './FlatsInformation/Flats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<> <Navbar /><Home /> <Footer /></>} />
        <Route path="/about" element={<> <Navbar /><AboutUs /> <Footer /></>} />
        <Route path="/ContactUs" element={<> <Navbar /><Contact /> <Footer /> </>} />
        <Route path="/PropertyListing" element={<> <Navbar /><PropertyListing /></>} />
        <Route path="/PropertyListing/:id" element={<Flats />} />
        <Route path="/Schedule" element={<> <Navbar /><Schedule /> <Footer /> </>} />
        <Route path="/flats" element={<> <Navbar /> <Flat /> <Footer /> </>} />
      </Routes>
    </Router>
  );
}

export default App;
