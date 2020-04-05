import React, { Component } from 'react'
import Heading from '../components/Heading'
import { HashLink as Link } from 'react-router-hash-link';

import { ProjectsContext } from "../context";



export default class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // slug: props.match.params.slug,
        }
    }
    static contextType = ProjectsContext;

    render() {

        const { handleCategoryChange, handleProjectButtonHandler, showSelectedProjectList, selectedCategory, projectButtonText } = this.context;

        let projectList = showSelectedProjectList ? (showSelectedProjectList.map(item =>
            (
                <div className="col-12 col-md-4 project-image-card">
                    <Link to={`/property/${item.id}`}>
                        <img src={item.projectSectionImage} key={item.id} alt="project" className="project-image" />
                    </Link>
                </div>
            )
        )) : [];
        let projectButton = ""
        if (projectButtonText !== "") {
            projectButton = (<div className="container project-show-button">
                <div className="row project-show-button-row">
                    <button onClick={handleProjectButtonHandler} className="show-button">{projectButtonText}</button>
                </div>
            </div>)
        }


        return (
            <div className="project-section" id="project">
                <Heading text="Projects" />
                <div className="category-title">
                    <ul>
                        <li style={{ color: selectedCategory === 'interior' ? '#ff4e00' : 'black' }} onClick={() => handleCategoryChange("interior")}>INTERIORS</li>
                        <li style={{ color: selectedCategory === 'architecture' ? '#ff4e00' : 'black' }} onClick={() => handleCategoryChange("architecture")}>ARCHITECTURE</li>
                        <li style={{ color: selectedCategory === 'residential' ? '#ff4e00' : 'black' }} onClick={() => handleCategoryChange("residential")}>RESIDENTIAL</li>
                        <li style={{ color: selectedCategory === 'commercial' ? '#ff4e00' : 'black' }} onClick={() => handleCategoryChange("commercial")}>COMMERCIAL</li>
                        <li style={{ color: selectedCategory === 'institutional' ? '#ff4e00' : 'black' }} onClick={() => handleCategoryChange("institutional")}>INSTITUTIONAL</li>
                    </ul>
                </div>

                <div className="project-image-container container">
                    <div className="row">
                        {projectList}
                    </div>
                </div>
                {/* show more or less button */}
                {projectButton}
            </div>
        )
    }
}

