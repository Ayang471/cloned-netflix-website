import React from 'react'
import devices from '../assets/device-pile.png'

function WatchEverywhere() {
    return (
        <div className='watch-everywhere'>
            <div className='row'>
                <div className='col'>
                    <img src={devices} alt='devices' />
                </div>
                <div className='col'>
                    <div className='text'>
                        <h1>Watch Everywhere</h1>
                        <p>Stream unlimited movies and TV shows on your
                            phone, tablet, laptop, and TV.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchEverywhere