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
               <div className="container-fluid" style={{ minHeight: "24rem", padding: "2rem" }}>
              <div className="row align-items-center">
                  <Card.Title  style={{ fontSize: "1.5rem" , paddingBottom: "0.5rem"}}>{props.videoTitle}</Card.Title>
                  <Card.Text style={{ fontSize: "1.2rem" , paddingBottom: "0.5rem"}}>{props.videoSubtitle}</Card.Text>
                 <video controls width="100%" style={{padding: "2rem"}}>
                <source src={props.video} type="video/mp4" />
              </video>
                </div>
            </div>
           <div className="container-fluid" style={{ minHeight: "24rem", padding: "2rem" }}>
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

            <div className="container-fluid" style={{ minHeight: "24rem", padding: "2rem" }}>
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
          <div className="container-fluid" style={{ minHeight: "24rem", padding: "2rem" }}>
              <div className="row align-items-center">
                  <div className="col-12 col-md-6 d-flex justify-content-end">
                  <img
                    src={props.imageThree}
                    className="img-fluid"
                    // style={{ maxWidth: "60%" }}
                    alt=""
                  />
                </div>
                <div className="col-12 col-md-6 text-start p-2">
                  <Card.Title  style={{ fontSize: "1.5rem" , paddingBottom: "0.5rem"}}>{props.titleThree}</Card.Title>
                  <Card.Text style={{ fontSize: "1.2rem" , paddingBottom: "0.5rem"}}>{props.subtitleThree}</Card.Text>
                  <Card.Text style={{ fontSize: "1.2rem" , paddingBottom: "0.5rem"}}>{props.descriptionThree}</Card.Text>
                </div>

            </div>
          </div>

          <div className="container-fluid" style={{ minHeight: "24rem", padding: "2rem" }}>
              <div className="row align-items-center">
                  <div className="col-12 col-md-6 d-flex justify-content-end">
                  <img
                    src={props.imageFour}
                    className="img-fluid"
                    // style={{ maxWidth: "60%" }}
                    alt=""
                  />
                </div>
                <div className="col-12 col-md-6 text-start p-2">
                  <Card.Title  style={{ fontSize: "1.5rem" , paddingBottom: "0.5rem"}}>{props.titleThree}</Card.Title>
                  <Card.Text style={{ fontSize: "1.2rem" , paddingBottom: "0.5rem"}}>{props.subtitleThree}</Card.Text>
                  <Card.Text style={{ fontSize: "1.2rem" , paddingBottom: "0.5rem"}}>{props.descriptionThree}</Card.Text>
                </div>

            </div>
          </div>
          


            </Card.Body>
          </Card>
              
        
          </>
  );
}

export default ProjectCard;


