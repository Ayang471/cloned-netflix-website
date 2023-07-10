import React, { useState } from 'react';
import '../stylesheets/Navbar.css';
import Logo from '../assets/netflixlogo.png';
import { Link } from 'react-router-dom';
import HeroText from './HeroText';

function Navbar() {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

  return (
      <div className="navbar">
          <div className='top-bar'>
              <nav className="navbar navbar-expand-lg">
                  <div className="container">
                      <img src={Logo} alt="logo" />
                      <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                          <select id="language-select" value={selectedLanguage} onChange={handleChange}>
                              <option value="en">English</option>
                              <option value="es">Spanish</option>
                          </select>
                          <Link to="/SignIn" className="btn">
                              Sign In
                          </Link>
                      </div>
                  </div>
              </nav>
              </div>
            <div className='hero-container'>
              <HeroText />
            </div>
      </div>
  )
}

export default Navbar