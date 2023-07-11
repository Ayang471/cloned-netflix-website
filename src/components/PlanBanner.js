import React from 'react'
import popcorn from '../assets/popcornSVG.png'
import '../stylesheets/PlanBanner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


function PlanBanner() {
    return (
        <div className='PlanBanner'>
            <div className='container'>
                <div className='center-text'>
                    <img src={popcorn} alt='popcorn' />
                </div>
                <div className='center-text'>
                    <h2>The Netflix you love for just $6.99.</h2>
                    <p>Get the Standard with ads plan.</p>
                    <a href="/" target="_blank">
                        Learn More
                        <FontAwesomeIcon icon={faChevronRight} style={{ color: "#458DF3", marginLeft: '6px', background: 'transparent' }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PlanBanner