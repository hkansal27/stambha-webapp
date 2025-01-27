import React, { Component } from 'react'
import { FaAlignRight } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io'

// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {

    state = {
        isOpen: false
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <nav className="custom-navbar">
                <div className="custom-nav-center">
                    <div className="custom-nav-header">
                        <Link to="/">
                            <img src="/images/Logo.png" alt="Stambha Logo" className="logo-img"/>
                        </Link>
                        <button type="button" className="custom-nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="custom-nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "custom-nav-links show-nav" : "custom-nav-links"}>
                        <li className="cross-close mobile-show" onClick={this.handleToggle}> 
                            <IoIosClose className="custom-nav-close-icon" />
                        </li>

                        <li onClick={this.handleToggle}> 
                            <Link to="/#project">PROJECTS</Link>
                        </li>
                        <li className="show-link">
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        </li>
                        <li onClick={this.handleToggle}>
                            <Link to="/#about">ABOUT US</Link>
                        </li>
                        <li className="show-link">
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        </li>
                        <li onClick={this.handleToggle}> 
                            <Link to="/#design" >DESIGN & BUILD</Link>
                        </li>
                        <li className="show-link">
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        </li>
                        <li onClick={this.handleToggle}> 
                            <Link to="/#contact" >CONTACT US</Link>
                        </li>
                        <li className="show-link">
                            &nbsp;&nbsp;&nbsp;
                        </li>
                    </ul>
                    <ul className="custom-nav-links">
                        <li> 
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pg/stambhadesign/posts/?ref=page_internal&mt_nav=0">
                                <img src="/images/icons/facebook.png" alt="facebook icon" className="social-media-icon"/>
                            </a>
                        </li>
                        <li> 
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/stambhadesign/?hl=en">
                                <img src="/images/icons/instagram.png" alt="instagram icon" className="social-media-icon"/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCWtKGArml6QrqdhiGxOCyPQ">
                                <img src="/images/icons/youtube.png" alt="youtube icon" className="social-media-icon"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
