import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <Navbar/><Home /> <Footer /></>} />
        <Route path="/about" element={<> <Navbar/><AboutUs /> <Footer /></>} />
        <Route path="/ContactUs" element={<> <Navbar/><Contact /> <Footer/> </>} />
        {/* Add other routes here */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */} {/* Optional for 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
