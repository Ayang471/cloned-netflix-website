import React from 'react'
import kids from '../assets/kids.png'

function KidsProfiles() {
    return (
        <div className='Kids-Profiles'>
            <section className='row'>
                <div className='col text'>
                    <h1>Create profiles for kids</h1>
                    <p>Send kids on adventures with their favorite characters
                        in a space made just for them—free with your
                        membership.</p>
                </div>
                <div className='col'>
                    <img src={kids} alt='devices' />
                </div>
            </section>

        </div>
    )
}

export default KidsProfiles