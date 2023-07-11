import React from 'react'
import tv from '../assets/tv.png'


function TVSection() {
    return (
        <div className='TV-Section'>
            <section className='row'>
                <div className='col text'>
                    <h1>Enjoy your TV</h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast,
                        Apple TV, Blu-ray players, and more.</p>
                </div>
                <div className='col'>
                    <img src={tv} alt='tv' />
                </div>
            </section>

        </div>
    )
}

export default TVSection