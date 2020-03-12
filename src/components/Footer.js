import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer() {
    return (
        <div className="footer container">
            <div className="custom-footer-center">
                <ul className="custom-footer-links">
                    <li> 
                        <Link to="/">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/#about">ABOUT US</Link>
                    </li>
                    <li> 
                        <Link to="/#design" >DESIGN & BUILD</Link>
                    </li>
                    <li> 
                        <Link to="/#contact" >CONTACT US</Link>
                    </li>
                </ul>
                <ul className="custom-footer-links">
                    <li> 
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pg/stambhadesign/posts/?ref=page_internal&mt_nav=0">
                            <img src="/images/icons/facebook.png" alt="facebook icon" className="social-media-icon"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCWtKGArml6QrqdhiGxOCyPQ">
                            <img src="/images/icons/youtube.png" alt="youtube icon" className="social-media-icon"/>
                        </a>
                    </li>
                </ul>
            </div>

            <hr className="footer-line"/>

            <div className="custom-footer-center footer-copyright">
                <ul className="custom-footer-links">
                    <li> 
                        © Stambh.org 2019
                    </li>
                </ul>
            </div>
        </div>
    )
}
