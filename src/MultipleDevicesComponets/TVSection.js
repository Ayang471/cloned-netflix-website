import React from 'react'
import tv from '../assets/tv.png'


function TVSection() {
    return (
        <div className='TV-Section'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='text'>
                            <h1>Enjoy your TV</h1>
                            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast,
                                Apple TV, Blu-ray players, and more.</p>
                        </div>
                    </div>
                    <div className='col'>
                        <img src={tv} alt='tv' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TVSection