/* eslint-disable react/prop-types */

import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import  "../../main.css"

function ProjectCard(props) {
  return (
    <>
          <Card xs={12} sm={10} md={8} lg={6} xl={4} className="container-fluid display-flex justify-content-start align-items-start p-4 mb-4">
            <Card.Body>
              <Card.Title className="text-left">{props.name}</Card.Title>
              <Card.Text className="text-left">{props.description}</Card.Text>
              <Card.Img variant="top" src={props.image} className="img-fluid" style={{maxWidth: "100%", height: "auto"}} />
              {/* <div className="flex-row flex-sm-row justify-content-around">
                <a
                  href={github}
                  target="_blank"
                  style={{
                    backgroundColor: "#212529",
                    color: "#f8f9fa",
                    margin: "5px",
                    padding: "10px",
                    textDecoration: "none",
                    fontFamily: "roboto-medium",
                    // minWidth: "150px",
                    minHeight: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize : "1.5rem"
                  }}
                  className="btn my-1"
                >
                  GitHub
                </a>
              {/* </div> */}
            {/* <Card.Body> */}
              <Card.Title className="text-left">{props.titleOne}</Card.Title>
              <Card.Subtitle className="text-left">{props.subtitleOne}</Card.Subtitle>
              <Card.Text className="text-left">{props.descriptionOne}</Card.Text>
              <Card.Img src={props.imageOne} className="img-fluid !justify-content-center align-items-center" style={{maxWidth: "60%", height: "60%"}} />
            </Card.Body>
          </Card>
        
          </>
  );
}

export default ProjectCard;


