import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/subscriptionform.css'

function SubscriptionForm() {
  return (
    <div className='subscription'>
          <div className='Form'>
              <p className='P2'>Ready to watch? Enter your email to create or restart your membership.</p>
              <form style={{ background: 'transparent' }} >
                  <input type="text" className='userEmail' placeholder='Email Address' />
                  <button className='btn'>Get Started
                      <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff", marginLeft: '6px', background: 'transparent' }} />
                  </button>
              </form>
          </div>
    </div>
  )
}

export default SubscriptionForm