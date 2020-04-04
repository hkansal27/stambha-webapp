import React, { Component } from 'react';
import items from './data';

let ProjectsContext = React.createContext();

class ProjectsProvider extends Component {
    state = {
        projects: [],
        categoryProjects: {},
        selectedProjectList: [],
        selectedCategory: "interior"
    };

    componentDidMount() {
        let projects = this.formatProjects(items);
        let categoryProjects = this.getCategoryWiseProject(projects);
        let selectedProjectList = categoryProjects[this.state.selectedCategory];
        console.log(selectedProjectList);
        this.setState({
            projects,
            categoryProjects,
            selectedProjectList
        });
    }

    formatProjects(items) {
        let tempProjects = items.map(item => {
            let id = item.sys.id;
            let coverImage =item.images[0] ? item.images[0] : [];
            let images = item.images.length > 1 ? item.images.slice(1) :  [];
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

            for(let key in categoryItem) {
                if(categoryItem[key]) {
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
        this.setState({
            selectedCategory,
            selectedProjectList: selectedProjectList
        })
    };

    render() {
        return (
            <ProjectsContext.Provider value={{ ...this.state, getProject: this.getProject, handleCategoryChange: this.handleCategoryChange }} >
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
