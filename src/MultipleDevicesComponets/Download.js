import React from 'react'
import mobile from '../assets/mobile.png'
//import Accordions from '../components/Accordions'
//import Footer from '../components/Footer'

function Download() {
    return (
        <div className='download'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img className='image' src={mobile} alt='devices' />
                    </div>
                    <div className='col'>
                        <div className='text'>
                            <h1>Download your shows to watch offline</h1>
                            <p>Only available on ad-free plans.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download