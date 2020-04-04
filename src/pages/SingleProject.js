import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { ProjectsContext } from '../context';

export default class SingleProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: props.match.params.slug,
        }
    }
    static contextType = ProjectsContext;

    render() {
        const { getProject } = this.context;
        const project = getProject(this.state.slug);

        if (!project) {
            return (
                <>
                    <div className="team-banner defaultTeamBanner">
                        <h1>Project Not Found!</h1>
                    </div>
                </>
            )
        }
        const { coverImage, heading, description, category, images } = project;

        let projectImages = images.map(item =>
            (
                <div className="row">
                    <div className="col-12">
                        <img src={item} className="single-project-image" alt="project-img" />
                    </div>
                </div>
            )
        );

        let categoryText = "";
        for (let key in category) {
            if (category[key]) {
                categoryText += categoryText ? " / " : "";
                categoryText += key[0].toUpperCase() + key.slice(1)
            }
        }

        var divStyle = {
            backgroundImage: 'url(' + coverImage + ')'
        }

        return (
            <>
                <div style={divStyle} className="single-project-banner defaultProjectBanner" >
                    <div className="mobile-off">
                        <div className="project-card">
                            <h1>
                                {heading}
                            </h1>
                            <p>
                                {description}
                            </p>
                            <h6>
                                {categoryText}
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="mobile-on">
                    <div className="project-card">
                        <h1>
                            {heading}
                        </h1>
                        <p>
                            {description}
                        </p>
                        <h6>
                            {categoryText}
                        </h6>
                    </div>
                </div>
                <div className="container single-project-body">
                    {projectImages}
                </div>

                <div className="container single-project-footer">
                    <div className="row">
                        <div className="col-12 project-footer">
                            <Link to="/#project">
                                <img src="/images/portfolio/4.jpg" className="back-image" alt="back-img" />
                            </Link>
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
