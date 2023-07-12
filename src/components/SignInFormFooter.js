import React  from 'react'
import '../stylesheets/SignInFormFooter.css'
import LanguageComponent from '../LanguageComponent';

function SignInFormFooter() {

  return (
      <div className='sign-in-form-footer'>
          <div className='flex-container'>
              <div className='row'>
                  <p className='customer-number'>Questions? Call 1-844-505-2993</p>
                  <div className='col'>
                      <ul>
                          <li><a href="/">FAQ</a></li>
                          <li><a href="/">Privacy</a></li>
                      </ul>

                  </div>
                  <div className='col'>
                      <ul>
                          <li><a href="/">Help Center</a></li>
                          <li><a href="/">Cookies Preferences</a></li>
                      </ul>
                  </div>
                  <div className='col'>
                      <ul>
                          <li><a href="/">Netflix Shop</a></li>
                          <li><a href="/">Corporate Information</a></li>
                      </ul>
                  </div>
                  <div className='col'>
                      <ul>
                          <li><a href="/">Terms of Use</a></li>
                          <li><a href="/">Do Not Sell or Share My PersonalInformation</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className='language'>
              <LanguageComponent />
          </div>
      </div>
  )
}

export default SignInFormFooter