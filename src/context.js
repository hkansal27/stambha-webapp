import React, { Component } from 'react';
import items from './data';

let ProjectsContext = React.createContext();

class ProjectsProvider extends Component {
    state = {
        projects: [],
        categoryProjects: {},
        selectedProjectList: [],
        showSelectedProjectList: [],
        selectedCategory: "interior",
        projectprojectButtonText: ""
    };

    componentDidMount() {
        let projects = this.formatProjects(items);
        let categoryProjects = this.getCategoryWiseProject(projects);
        let selectedProjectList = categoryProjects[this.state.selectedCategory];
        this.setShowProjectList(selectedProjectList);
        this.setState({
            projects,
            categoryProjects,
            selectedProjectList
        });
    }

    isMobileDevice() {
        return ((window.innerWidth <= 768));
    }

    formatProjects(items) {
        let tempProjects = items.map(item => {
            let id = item.sys.id;
            let coverImage = item.images[0] ? item.images[0] : [];
            let images = item.images;
            let room = { ...item.fields, coverImage, images, id };
            return room;
        });
        return tempProjects;
    }

    getCategoryWiseProject(projects) {
        // default category
        let categoryList = {
            interior: [],
            architecture: [],
            residential: [],
            commercial: [],
            institutional: []
        };

        projects.forEach(project => {
            let categoryItem = project.category;

            for (let key in categoryItem) {
                if (categoryItem[key]) {
                    categoryList[key].push(project);
                }
            }
        });

        return categoryList;
    }

    getProject = id => {
        let tempProjects = [...this.state.projects];
        const project = tempProjects.find(project => project.id === id);
        return project;
    };

    handleCategoryChange = category => {
        let selectedCategory = category;
        let selectedProjectList = this.state.categoryProjects[category] ? this.state.categoryProjects[category] : [];
        this.setShowProjectList(selectedProjectList)
        this.setState({
            selectedCategory,
            selectedProjectList: selectedProjectList
        })
    };

    handleProjectButtonHandler = () => {
        let tempSelectedProjectList;
        if (this.state.projectButtonText === "See More") {
            this.setState({
                projectButtonText: "See Less"
            })
           
            tempSelectedProjectList = this.state.selectedProjectList;
        } else {
            this.setState({
                projectButtonText: "See More"
            })

            if ((this.state.selectedProjectList.length > 5 && this.isMobileDevice()) || (this.state.selectedProjectList.length > 9 && !this.isMobileDevice())) {
                let index = this.isMobileDevice() ? 5 : 9;
                tempSelectedProjectList = this.state.selectedProjectList.slice(0, index);
            } else {
                tempSelectedProjectList = this.state.selectedProjectList;
            }
        }
        this.setState({
            showSelectedProjectList: tempSelectedProjectList
        })
    }

    setShowProjectList = (projectList) => {
        let tempSelectedProjectList = [];
        if ((projectList.length > 5 && this.isMobileDevice()) || (projectList.length > 9 && !this.isMobileDevice())) {
            let index = this.isMobileDevice() ? 5 : 9;
            tempSelectedProjectList = projectList.slice(0, index);
            this.setState({
                projectButtonText: "See More"
            })
        } else {
            tempSelectedProjectList = projectList;
            this.setState({
                projectButtonText: ""
            })
        }
        this.setState({
            showSelectedProjectList: tempSelectedProjectList
        });
    }

    render() {
        return (
            <ProjectsContext.Provider value={{ ...this.state, getProject: this.getProject, handleProjectButtonHandler: this.handleProjectButtonHandler, handleCategoryChange: this.handleCategoryChange }} >
                {this.props.children}
            </ProjectsContext.Provider>
        )
    }
};
const ProjectsConsumer = ProjectsContext.Consumer;


export { ProjectsContext, ProjectsProvider, ProjectsConsumer };


export function withProjectConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <ProjectsConsumer>
                {value => <Component {...props} context={value} />}
            </ProjectsConsumer>
        );
    };
}
