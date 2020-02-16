import React, { Component } from 'react'

import Heading from '../components/Heading'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Home extends Component {
    render() {
        return (
            <>
                {/* Main Banner */}
                <Carousel showThumbs={false} showStatus={false}>
                    <div>
                        <img src="/images/banner_1.jpg" alt="banner" />
                    </div>
                    <div>
                        <img src="/images/banner_2.jpg" alt="banner" />
                    </div>
                    <div>
                        <img src="/images/banner_3.jpg" alt="banner" />
                    </div>
                </Carousel>

                {/* Project Section */}
                <div className="project-section">
                    <Heading text="Projects" />
                    <div className="category-title">
                        <ul>
                            <li>INTERIORS</li>
                            <li>ARCHITECTURE</li>
                            <li>RESIDENTIAL</li>
                            <li>COMMERCIAL</li>
                            <li>INSTITUTIONAL</li>
                        </ul>
                    </div>
                </div>

                {/* About us */}
                <div className="about-section">
                    <Heading text="About Us" />
                    <div className="container-fluid about-container">
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <div className="content-box">
                                    <div className="content">
                                        <span className="highlight"><span className="red-highlight">Stambha</span> Design House</span> embraces creative architects and best interior designers in Noida.
                                        The design house initiated its humble journey in 2009 with selective works spanning Delhi NCR and other parts of country too. We provide complete interior solutions, turnkey services and architecture consultancy.
                                    </div>
                                    <div className="content">
                                        We believe that designer is connected to end user through her work.
                                        Recent studies show that we spend maximum time of our lives in indoor spaces which impact mind and behavior. Therefore an experience of soulful design journey induces positivity to build environment ultimately felt by users. We believe in comprehensive attention to various aspects of design from space planning to design detailing and innovation to affordability keeping  client’s emotions and designer’s empathy intact.
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="box">
                                    <div>

                                    </div>
                                    <div className="quote-content">
                                        <div className="quote">
                                            "God is in the details"
                                       </div>
                                        <div className="quote-signature">
                                            - Mies van der Rohe
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <div className="box">
                                    <div>

                                    </div>
                                    <div className="quote-content">
                                        <div className="quote">
                                            "Good design is making something
                                                intelligible and memorable.
                                                Great design is making something
                                                memorable and meaningful."
                                       </div>
                                        <div className="quote-signature">
                                            - Dieter Rams
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="content-box">
                                    <div className="content">
                                        Well designed spaces inspires its users by rejuvenating and re-energizing in every day's life. Besides interior consultant and architecture consultant, the design house has dedicated interior construction team and skilled craftsmen. Our team has successfully delivered interior projects in Delhi, Gurgaon, Greater Noida and Noida Extension West.  We aim to contribute to as many lives through commercial as well as residential projects of all scale and diversities by being:
                                    <ul className="points">
                                            <li>
                                                Design conscious
                                        </li>
                                            <li>
                                                Quality Conscious
                                        </li>
                                            <li>
                                                User-Experience Conscious
                                        </li>
                                            <li>
                                                Cost Conscious
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="team-button">
                                Our Team
                            </div>
                        </div>
                    </div>
                </div>

                {/* What we do section */}

                <div className="what-we-do-section">
                    <Heading text="About Us" />
                    <div className="container-fluid what-we-do-container">
                        <div className="row">
                            <div className="col-md-3 col-xs-12">
                                <div className="box-container">
                                    <div className="box-image image-1">
                                        <div className="points">
                                            <ul>
                                                <li>Space Planning</li>
                                                <li>Theme based interiors</li>
                                                <li>Lighting & Accessorizing</li>
                                                <li>Home Improvement</li>
                                                <li>Residential/Commercial</li>
                                                <li>Consultancy</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        INTERIOR DESIGN
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12">
                                <div className="box-container">
                                    <div className="box-image image-2">
                                        <div className="points">
                                            <ul>
                                                <li>Wood Works</li>
                                                <li>False Ceiling</li>
                                                <li>POP-Paint</li>
                                                <li>Complete Interiors</li>
                                                <li>Residential/Commercial</li>
                                                <li>Turnkey</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        DESIGN & BUILD
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12">
                                <div className="box-container">
                                    <div className="box-image image-3">
                                        <div className="points">
                                            <ul>
                                                <li>Dressers & Wardrobes</li>
                                                <li>TV Units & Bar Unitss</li>
                                                <li>Modular Kitchen</li>
                                                <li>Consoles & Cabinets</li>
                                                <li>Beds & Side Tables</li>
                                                <li>Exclusive designs</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        CUSTOMIZED
                                        FURNITURE
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-12">
                                <div className="box-container">
                                    <div className="box-image image-4">
                                        <div className="points">
                                            <ul>
                                                <li>Independent Villas</li>
                                                <li>Farm Houses</li>
                                                <li>Institutional</li>
                                                <li>Commercial</li>
                                                <li>Concept Design</li>
                                                <li>Consultancy</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        ARCHITECTURE
                                        DESIGN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Design and build section */}
                <div className="design-section">
                    <div className="container-fluid design-container">
                        <div className="design-section-heading">
                        Design & Build
                        </div>
                        <hr className="horizontal-line-heading"/>
                        <div className="design-section-subheading">
                        GET YOUR DREAM INTERIORS IN 4 EASY STEPS
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="col-md-3 col-xs-12">

                            <div className="card">
                                <div className="index">
                                    1
                                </div>
                                <div className="icon">

                                </div>
                                <div className="card-heading">
                                Talk to Designer
                                </div>
                                <div className="footer">
                                    <div className="points">
                                    • Know Your Designer
                                    • Tell Us Your Requirements 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">

                        </div>
                        <div className="col-md-3 col-xs-12">

                        </div>
                        <div className="col-md-3 col-xs-12">

                        </div>
                    </div>
                </div>
                {/* BHK Pricing section */}
                <div className="pricing-section">
                    <div className="container-fluid pricing-container">
                        <div className="row">
                            <div className="col-md-6 col-12 price-card">
                                <div className="price-content">
                                    <h1>2BHK</h1>
                                    <h3>Starting from</h3>
                                    <h3>NR 3.0 Lakhs only</h3>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 price-card second">
                                    <div className="price-content">
                                    <h1>3BHK</h1>
                                    <h3>Starting from</h3>
                                    <h3>NR 4.0 Lakhs only</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testominial */}
                <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                    <div>
                        <div className="testimonial">
                            <Heading text="Testomonial" />
                            <div className="content">
                                <p>
                                    Lorem ipsum dolor sit amet,  consectetur adipisicing elit. Doloribus  accusamus expedita repellat similique odio aspernatur ex, 
                                    architecto eaquequo suscipit.Lorem ipsum dolor sit amet,  consectetur adipisicing elit. Doloribus  
                                    accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.
                                </p>
                                <h6>Susan W.</h6>
                                <p>Businessman</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial">
                            <Heading text="Testomonial" />
                            <div className="content">
                                <p>
                                    Lorem ipsum dolor sit amet,  consectetur adipisicing elit. Doloribus  accusamus expedita repellat similique odio aspernatur ex, 
                                    architecto eaquequo suscipit.Lorem ipsum dolor sit amet,  consectetur adipisicing elit. Doloribus  
                                    accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.
                                </p>
                                <h6>Susan W.</h6>
                                <p>Businessman</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial">
                            <Heading text="Testomonial" />
                            <div className="content">
                                <p>
                                    Lorem ipsum dolor sit amet,  consectetur adipisicing elit. Doloribus  accusamus expedita repellat similique odio aspernatur ex, 
                                    architecto eaquequo suscipit.Lorem ipsum dolor sit amet,  consectetur adipisicing elit. Doloribus  
                                    accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.
                                </p>
                                <h6>Susan W.</h6>
                                <p>Businessman</p>
                            </div>
                        </div>
                    </div>
                </Carousel>

                {/* Contact Us Section */}
                <div className="contact-us-section">
                    <div className="container-fluid contact-us-container">
                        <div className="row">
                            <div className="col-md-6 col-12 contact-us-card">
                                <div className="contact-us-body">
                                <div className="contact-us-body-heading">
                                    <h1>Contact Us</h1>
                                    <hr className="horizontal-line-heading"/>
                                </div>
                                    <div className="name-input">
                                        <input placeholder="Name" />
                                    </div>
                                    <div className="email-input">
                                         <input placeholder="Email" />
                                    </div>
                                    <div className="message-input">
                                        <textarea placeholder="Message" rows="6"></textarea>
                                    </div>
                                    <div className="button">
                                        <button>Send Message</button>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-md-6 col-12 contact-us-map">
                                <div id="map-canvas" class="map-canvas"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
