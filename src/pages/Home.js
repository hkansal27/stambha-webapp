import React, { Component } from 'react'

import Heading from '../components/Heading'
import Project from '../components/Project'
import MapComponent from '../components/Map'
import { Link } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { IoIosArrowForward } from "react-icons/io";


export default class Home extends Component {
    render() {
        return (
            <>
                <div className="mobile-banner-bottom">
                    <div className="banner-title-text">
                        Interior Design
                    </div>
                    <div className="banner-title-text">
                        Design & Build
                    </div>
                    <div className="banner-title-text">
                        Architecture Design
                    </div>
                </div>
                {/* Main Banner */}
                <Carousel infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false} autoPlay={true} useKeyboardArrows={true}>
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

                <div className="banner-bottom row">
                    <div className="banner-title-text col-4">
                        Interior Design
                    </div>
                    <div className="banner-title-text col-4">
                        Design & Build
                    </div>
                    <div className="banner-title-text col-4">
                        Architecture Design
                    </div>
                </div>

                {/* Project section */}
                <Project />


                {/* About us */}
                <div className="about-section" id="about">
                    <Heading text="About Us" />
                    <div className="container-fluid about-container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 order-xs-1">
                                <div className="content-box">
                                    <div className="content">
                                        <span className="highlight"><span className="red-highlight">STAMBHA</span> DESIGN HOUSE</span> embraces creative architects and best interior designers in Noida.
                                        The design house initiated its humble journey in 2009 with selective works spanning Delhi NCR and other parts of country too. We provide complete interior solutions, turnkey services and architecture consultancy.
                                    </div>
                                    <div className="content">
                                        We believe that designer is connected to end user through her work.
                                        Recent studies show that we spend maximum time of our lives in indoor spaces which impact mind and behavior. Therefore an experience of soulful design journey induces positivity to build environment ultimately felt by users. We believe in comprehensive attention to various aspects of design from space planning to design detailing and innovation to affordability keeping  client’s emotions and designer’s empathy intact.
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 col-sm-12 order-xs-2 zero--mobile-padding">
                                <div className="box">
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
                            <div className="col-md-6 col-sm-12 order-xs-2 zero--mobile-padding">
                                <div className="box">
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
                            <div className="col-md-6 col-sm-12 order-xs-1">
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
                            <div className="col-12">
                                <Link to="/teams" className="team-button">
                                    Our Team <IoIosArrowForward className="custom-team-icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What we do section */}

                <div className="what-we-do-section">
                    {/* <Heading text="What we do" /> */}
                    <div className="row what-we-do-heading">
                        <div className="what-we-do-title">
                            What we do
                        </div>
                        <hr className="what-we-do-horizontal-line" />
                    </div>
                    <div className="container-fluid what-we-do-container">
                        <div className="row">
                            <div className="col-md-3 col-6 minor-padding">
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
                            <div className="col-md-3 col-6 minor-padding">
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
                            <div className="col-md-3 col-6 minor-padding">
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
                            <div className="col-md-3 col-6 minor-padding">
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
                <div className="design-section" id="design">
                    <div className="container-fluid design-container">
                        <div className="design-section-heading">
                            Design & Build
                        </div>
                        <hr className="horizontal-line-heading" />
                        <div className="design-section-subheading">
                            GET YOUR DREAM INTERIORS IN 4 EASY STEPS
                        </div>
                    </div>
                    <div className="card-row row">
                        <div className="col-md-3 col-6 minor-padding">
                            <div className="card">
                                <div className="index">
                                    1
                                </div>
                                <div className="icon">
                                    <img src="./images/icons/chat.png" alt="icon" className="image" />
                                </div>
                                <div className="card-heading">
                                    Talk to Designer
                                </div>
                                <div className="card-points">
                                    <ul className="points">
                                        <li>• Know Your Designer</li>
                                        <li>•  Tell Us Your Requirements </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 minor-padding">
                            <div className="card">
                                <div className="index">
                                    2
                                </div>
                                <div className="icon">
                                    <img src="./images/icons/brain.png" alt="icon" className="image" />
                                </div>
                                <div className="card-heading">
                                    Get the Design Concept
                                </div>
                                <div className="card-points">
                                    <ul className="points">
                                        <li>• Choose Design Ideas</li>
                                        <li>• Book Your Designer</li>
                                        <li>• Finalize Design Concept </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 minor-padding">
                            <div className="card">
                                <div className="index">
                                    3
                                </div>
                                <div className="icon">
                                    <img src="./images/icons/cart.png" alt="icon" className="image" />
                                </div>
                                <div className="card-heading">
                                    Place the Order
                                </div>
                                <div className="card-points">
                                    <ul className="points">
                                        <li>• Written commitment </li>
                                        <li>• Get Project Schedule</li>
                                        <li>• Payments is easy  installments based on Project Schedule</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 minor-padding">
                            <div className="card">
                                <div className="index">
                                    4
                                </div>
                                <div className="icon">
                                    <img src="./images/icons/home.png" alt="icon" className="image" />
                                </div>
                                <div className="card-heading">
                                    Move into Your Dream Space
                                </div>
                                <div className="card-points">
                                    <ul className="points">
                                        <li>• Get the Keys</li>
                                        <li>• Final installment on Handover</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="why-us-container">
                    <div className="why-us-row row">
                        <div className="col-12 why-us-heading">
                            <div className="why-us-title">
                                Why us
                            </div>
                            <hr className="why-us-horizontal-line" />
                        </div>
                    </div>
                    <div className="why-us-row row">
                        <div className="col-md-4 col-12 minor-padding">
                            <div className="why-us-card">
                                <div className="icon">
                                    <img src="./images/icons/1.png" alt="icon" className="image" />
                                </div>
                                <div className="content">
                                    <div className="card-heading">
                                        One Point Professional Service
                                </div>
                                    <div className="card-subheading">
                                        Interior design, interior construction &
                                        architecture consultancy
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 minor-padding">
                            <div className="why-us-card">
                                <div className="icon">
                                    <img src="./images/icons/2.png" alt="icon" className="image" />
                                </div>
                                <div className="content">
                                    <div className="card-heading">
                                        Competitive Rates

                                </div>
                                    <div className="card-subheading">
                                        woodwork starting
                                        from Rs850/sq.ft. onwards
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 minor-padding">
                            <div className="why-us-card">
                                <div className="icon">
                                    <img src="./images/icons/3.png" alt="icon" className="image" />
                                </div>
                                <div className="content">
                                    <div className="card-heading">
                                        Special discounts on Design Charges
                                </div>
                                    <div className="card-subheading">
                                        in Design & Build projects
                                        exclusive concept by qualified & industry
                                        experienced designers
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 minor-padding">
                            <div className="why-us-card">
                                <div className="icon">
                                    <img src="./images/icons/4.png" alt="icon" className="image" />
                                </div>
                                <div className="content">
                                    <div className="card-heading">
                                        Hassle Free Process
                                </div>
                                    <div className="card-subheading">
                                        along with agreement & work schedule
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 minor-padding">
                            <div className="why-us-card">
                                <div className="icon">
                                    <img src="./images/icons/5.png" alt="icon" className="image" />
                                </div>
                                <div className="content">
                                    <div className="card-heading">
                                        Personal Attention
                                        from Start to End
                                </div>
                                    <div className="card-subheading">
                                        customized detailed design & décor
                                        assistance during handover
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* BHK Pricing section */}
                <div className="pricing-section">
                    <div className="container-fluid pricing-container">
                        <div className="row">
                            <div className="col-6 price-card">
                                <div className="price-content">
                                    <h1>2BHK</h1>
                                    <h3>Starting from</h3>
                                    <h3>NR 3.0 Lakhs only</h3>
                                </div>
                            </div>
                            <div className="col-6 price-card second">
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
                <Carousel infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false} autoPlay={true} useKeyboardArrows={true}>
                    <div>
                        <div className="testimonial">
                            <Heading text="Testimonial" />
                            <div className="content">
                                <p>
                                    We got lucky to get our interiors done by them.
                                    They worked real hard and all came out very well.
                                    WHO SO EVER comes to our home appreciate design aesthetics… We are really satisfied and delighted!
                                </p>
                                <h6>Manish Saxena</h6>
                                <p>Hospitality Industry</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial">
                            <Heading text="Testomonial" />
                            <div className="content">
                                <p>
                                    We got our interiors done by them for our very first house and it came out real well in our low budget.
                                    They are very good with their work and whosoever see’s the house gets really impressed.
                                </p>
                                <h6>Mrinalini Sinha</h6>
                                <p>Cabin Crew Incharge (Inflight services)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial">
                            <Heading text="Testomonial" />
                            <div className="content">
                                <p>
                                    Excellent services in respect of concept & design. They have shown their professionalism during performance of the assignment by prompt responsiveness in completing the project with punctuality on targeted value. The best quality of work satisfied me specially turning my dream home in reality.
                                    Thanks Stambha Desgn House !!
                                </p>
                                <h6>P.Krishna</h6>
                                <p>COO, Production Industry (Home Appliances)</p>
                            </div>
                        </div>
                    </div>
                </Carousel>

                {/* Contact Us Section */}
                <div className="contact-us-section" id="contact">
                    <div className="container-fluid contact-us-container">
                        <div className="row">
                            <div className="col-md-6 col-12 contact-us-card">
                                <div className="contact-us-body">
                                    <div className="contact-us-body-heading">
                                        <h1>Contact Us</h1>
                                        <hr className="horizontal-line-heading" />
                                    </div>
                                    <div class="address">
                                        <span class="label">Address :&nbsp;</span>
                                        <span class="value"><span>Stambha Design House &nbsp;</span>
                                        E 1308, Ace Platinum, Zeta-1, Greater Noida, India. 201308</span>
                                    </div>
                                    <div class="contact">
                                        <span class="label">Phone :&nbsp;</span>
                                        <span class="value">+91 9911336943</span>
                                    </div>
                                    <div class="email">
                                        <span class="label">Email :&nbsp; </span>
                                        <span class="value">
                                            <a class="contact-us-link" href="mailto:ashish.stambhadesign@gmail.com">
                                                ashish.stambhadesign@gmail.com
                                            </a>
                                        </span>
                                    </div>
                                    {/* <div className="name-input">
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
                                    </div> */}
                                </div>

                            </div>
                            <div className="col-md-6 col-12 zero-padding contact-us-map">
                                <div className="map-canvas">
                                    <MapComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
