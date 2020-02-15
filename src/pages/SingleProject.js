import React, { Component } from 'react'

export default class SingleProject extends Component {
    render() {
        return (
            <>
            <div className="single-project-banner defaultProjectBanner">
                <div className="mobile-off">
                    <div className="project-card">
                        <h1>
                            Designer’s Adobe, Greater Noida 
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam.
                        </p>
                        <h6>
                            Interior / Residential 
                        </h6>
                    </div>
                </div>
            </div>
            <div className="mobile-on">
                    <div className="project-card">
                        <h1>
                            Designer’s Adobe, Greater Noida 
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam.
                        </p>
                        <h6>
                            Interior / Residential 
                        </h6>
                    </div>
            </div>
            <div className="container single-project-body">
                <div className="row">
                    <div className="col-12">
                        <img src="/images/portfolio/1.jpg" className="single-project-image" alt="project-img" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img src="/images/portfolio/2.jpg" className="single-project-image" alt="project-img" />
                    </div>
                </div>
            </div>

            <div className="container single-project-footer">
                <div className="row">
                    <div className="col-12 project-footer">
                        <img src="/images/portfolio/4.jpg" className="back-image" alt="back-img" />
                        <div className="content">
                            <p>Back</p>
                            <h6>Portfolio</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
