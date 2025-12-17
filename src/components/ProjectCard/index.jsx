/* eslint-disable react/prop-types */

import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import  "../../main.css"

function ProjectCard(props) {
  return (
    <>
          <Card xs={12} sm={10} md={8} lg={6} xl={4} className="container-fluid display-flex p-4 mb-4 border-0 bg-transparent shadow-none" style={{ width: '95%'}}>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem", paddingBottom: "0.5rem"}} className="text-left">{props.name}</Card.Title>
              <Card.Subtitle style={{ fontSize: "1.2rem" }}className="text-left">{props.description}</Card.Subtitle>
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
           <div className="container-fluid" style={{ minHeight: "32rem", padding: "5rem" }}>
              <div className="row align-items-center">
                <div className="col-12 col-md-6 text-start p-2">
                  <Card.Title  style={{ fontSize: "1.5rem" , paddingBottom: "0.5rem"}}>{props.titleOne}</Card.Title>
                  <Card.Text style={{ fontSize: "1.2rem" , paddingBottom: "0.5rem"}}>{props.subtitleOne}</Card.Text>
                  <Card.Text style={{ fontSize: "1.2rem" , paddingBottom: "0.5rem"}}>{props.descriptionOne}</Card.Text>
                </div>

                <div className="col-12 col-md-6 d-flex justify-content-end">
                  <img
                    src={props.imageOne}
                    className="img-fluid"
                    // style={{ maxWidth: "60%" }}
                    alt=""
                  />
                </div>

            </div>
          </div>

            <div className="container-fluid" style={{ minHeight: "32rem", padding: "5rem" }}>
              <div className="row align-items-center">
                  <div className="col-12 col-md-6 d-flex justify-content-end">
                  <img
                    src={props.imageTwo}
                    className="img-fluid"
                    // style={{ maxWidth: "60%" }}
                    alt=""
                  />
                </div>
                <div className="col-12 col-md-6 text-start p-2">
                  <Card.Title  style={{ fontSize: "1.5rem" , paddingBottom: "0.5rem"}}>{props.titleTwo}</Card.Title>
                  <Card.Text style={{ fontSize: "1.2rem" , paddingBottom: "0.5rem"}}>{props.subtitleTwo}</Card.Text>
                  <Card.Text style={{ fontSize: "1.2rem" , paddingBottom: "0.5rem"}}>{props.descriptionTwo}</Card.Text>
                </div>

            </div>
          </div>
            </Card.Body>
          </Card>
              
        
          </>
  );
}

export default ProjectCard;


