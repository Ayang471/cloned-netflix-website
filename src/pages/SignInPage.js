import React from 'react'
import SignInForm from '../SignInComponents/SignInForm'
import '../stylesheets/SignInForm.css'
import Logo from '../assets/netflixlogo.png'
import { Link } from 'react-router-dom';
import { Hide } from '@chakra-ui/react'
import SignInFormFooter from '../components/SignInFormFooter';
import LanguageComponent from '../LanguageComponent';


function SignInPage() {

  return (
    <div className='SignIn-form'>
      <div className="navbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link to='/'><img src={Logo} alt="logo" /></Link>
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
              <Hide breakpoint='(max-width: 482px)'>
                <LanguageComponent />
              </Hide>
              <Link to="/SignInPage" className="btn" >
                Sign In
              </Link>
            </div>
          </div>
        </nav>
      </div >
      <SignInForm />
      <SignInFormFooter />
    </div >
  )
}

export default SignInPage