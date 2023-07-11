import React from 'react'
import '../stylesheets/HeroText.css'
import SubscriptionForm from './SubscriptionForm';


function HeroText() {
    return (
        <div className='HeroText'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <p className='P1'>Watch anywhere. Cancel anytime</p>
            <SubscriptionForm />
        </div>
    )
}

export default HeroText