import React from 'react'
import HeroText from './HeroText'
import '../stylesheets/HeroSection.css'
import Logo from '../assets/netflixlogo.png'
import { Link } from 'react-router-dom';
import { Hide } from '@chakra-ui/react'
import LanguageComponent from '../LanguageComponent';


function HeroSection() {

  return (
    <div className='hero-section'>
      <div className='hero-container'>
        <div className="navbar">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link to='/'><img src={Logo} alt="logo" className='logo' /></Link>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <Hide breakpoint='(max-width: 482px)'>
                  <LanguageComponent />
                </Hide>
                <Link to="/SignInPage" className="btn">
                  Sign In
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className='banner'>
        <HeroText />
      </div>
    </div>
  )
}

export default HeroSection