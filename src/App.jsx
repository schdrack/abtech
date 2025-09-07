import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        {/* Quick Debug Nav */}
        <div className="text-center my-4">
          <Link to="/" className="btn btn-primary me-3">Go to Home</Link>
          <Link to="/about" className="btn btn-success">Go to About</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          
          {/* Fallback Route for 404 */}


          <Route path="*" element={<h2 className="text-center my-5">404 - Page Not Found</h2>} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;