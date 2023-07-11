import React from 'react'
import mobile from '../assets/mobile.png'
//import Accordions from '../components/Accordions'
//import Footer from '../components/Footer'

function Download() {
    return (
        <div className='download'>
            <section className='row'>
                <div className='col'>
                    <img src={mobile} alt='devices' />
                </div>
                <div className='col text'>
                    <h1>Download your shows to watch offline</h1>
                    <p>Only available on ad-free plans.</p>
                </div>
            </section>
          {/*  <Accordions />
            <Footer /> */}
        </div>
    )
}

export default Download