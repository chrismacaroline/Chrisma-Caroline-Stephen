// import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Projects from "../Projects";
import projectsData from "../../projects.json";


const ProjectsGallery = () => {
  return (
    <>
      <Container className="container-fluid flex flex-column min-vh-100 align-items-start justify-content-start">
          <Row className="container-fluid d-flex align-items-start">
            {projectsData.map((project) => (
              <Col key={project.id} sm={12} md={12} lg={12}>
                <Projects
                  id={project.id}
                  description={project.description}
                  image={project.image}
                  name={project.name}
                  github={project.github}
                  deployed={project.deployed}
                  onClick={() => console.log(project)}
                />
              </Col>
            ))}
          </Row>
        {/* } */}
      </Container>
    </>
  );
};

export default ProjectsGallery;
