// import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Projects from "../Projects";
import projects from "../../projects.json";


const ProjectsGallery = () => {

    
  return (
    <>
      <Container fluid className="min-vh-100 px-3 px-md-4 px-lg-5 py-lg-5 py-3 py-md-4 py-sm-3">
        <div className="fs-4 fs-md-3 fs-lg-2 fw-semibold py-lg-2 py-sm-1"  style ={{ fontFamily: "roboto-medium"}}>Front-End & UX Projects</div>
          <Row className="g-4 justify-content-between">
            {projects.map((project) => (
              <Col key={project.id} sm={12} md={6} lg={6} className="d-flex">
                <Projects
                  id={project.id}
                  description={project.description}
                  briefDescription={project.briefDescription}
                  image={project.image}
                  name={project.name}
                  github={project.github}
                  deployed={project.deployed}
                  onClick={() => console.log(project.id)}
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
