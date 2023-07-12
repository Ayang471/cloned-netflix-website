import React from 'react'
import '../stylesheets/Footer.css'
import LanguageComponent from '../LanguageComponent';

function Footer() {
    return (
        <div className='footer'>
            <div className='flex-container'>
                <div className='row'>
                    <p className='customer-number'>Questions? Call 1-844-505-2993</p>
                    <div className='col'>
                        <ul>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/">Investor Relations</a></li>
                            <li><a href="/">Buy Gift Cards</a></li>
                            <li><a href="/">Cookie Preference</a></li>
                            <li><a href="/">Legal Notice</a></li>
                        </ul>

                    </div>
                    <div className='col'>
                        <ul>
                            <li><a href="/">Help Center</a></li>
                            <li><a href="/">Jobs</a></li>
                            <li><a href="/">Ways to Watch</a></li>
                            <li><a href="/">Corporate Information</a></li>
                            <li><a href="/">Only on Netflix</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul>
                            <li><a href="/">Account</a></li>
                            <li><a href="/">Netflix Shop</a></li>
                            <li><a href="/">Terms of Use</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Do Not Sell or Share My Personal Information</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul>
                            <li><a href="/">Media Center</a></li>
                            <li><a href="/">Redeem Gift Cards</a></li>
                            <li><a href="/">Privacy</a></li>
                            <li><a href="/">Speed Test</a></li>
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

export default Footer