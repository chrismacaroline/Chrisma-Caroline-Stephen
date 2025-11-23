import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Projects from "../Projects";
import projectsData from "../../projects.json";
import ProjectCard from '../ProjectCard';
import { Button } from 'react-bootstrap';


const ProjectsGallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const selectProject = (projectId) => {
        const chosenProject = projectsData.find(project => project.id === projectId);
        setSelectedProject(chosenProject);
    };

    return (
        <div className= "container-fluid d-flex flex-column min-vh-100"style={{ backgroundColor : "#f8f9fa"}} >
         
            <Container className='container-fluid' style={{padding: "20px"}}>
                {selectedProject ? (
                    
                    <>   <div className="container-fluid d-flex flex-column align-items-center">
                        
                        <ProjectCard className ="col mb-2" project={selectedProject} id={selectedProject.id}
                                    image={selectedProject.image}
                                    name={selectedProject.name}
                                    github={selectedProject.github}
                                    skill={selectedProject.skill}
                                    description={selectedProject.description}
                                    deployed={selectedProject.deployed} />
                                  
                                    
                                  <div className ="btn" style ={{ backgroundColor : "#ECECEC", color : "#474787", margin : "10px", padding : "10px", fontFamily : "roboto-medium", fontSize : "20px"}} onClick={() => setSelectedProject(null)}>BACK TO GALLERY</div>
                        </div>
                    </>
                ) : (
                    <Row>   
                        
                        {projectsData.map((project) => (
                            <Col key={project.id} sm={12} md={6} lg={4}>
                                <Projects
                                    id={project.id}
                                    description={project.description}
                                    // skill={project.skill}
                                    image={project.image}
                                    name={project.name}
                                    github={project.github}
                                    deployed={project.deployed}
                                    selectProject={() => selectProject(project.id)}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default ProjectsGallery;
