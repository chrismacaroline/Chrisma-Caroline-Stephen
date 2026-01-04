/* eslint-disable react/prop-types */

import Card from "react-bootstrap/Card";
import {  Button } from "react-bootstrap";
import "../../main.css";
import projects from "../../projects.json";
import { useParams } from "react-router-dom";

function ProjectCard() {
 const { projectId } = useParams();
    const project = projects.find(
    (p) => p.id === projectId
  );
   
  return (
    <>
      <Card
        xs={12}
        sm={10}
        md={8}
        lg={6}
        xl={4}
        className="container-fluid display-flex justify-content-center p-4 mb-4 border-1 bg-transparent"
        style={{ width: "95%",boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)"}}
      >
        <Card.Body className="container-fluid display-flex justify-content-center">
          <Card.Title
            style={{ fontSize: "2rem", paddingBottom: "0.5rem" }}
            className="text-left"
          >
            {project.name}
          </Card.Title>
        <Card.Subtitle style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }} className="text-left">
            {project.description}
          </Card.Subtitle>
          <Card.Img
            variant="top"
            src={project.imageMain}
            className="container-fluid d-flex img-fluid justify-content-center"
            style={{
              maxWidth: "80%",
              height: "auto",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.01)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          {/* Video Section */}
          <div
            className="container-fluid"
            style={{
              minHeight: "24rem",
              paddingTop: "2rem",
              paddingBottom: "4rem",
            }}
          >
            <div className="row align-items-center justify-content-center">
              <Card.Title
                style={{ fontSize: "1.8rem", paddingBottom: "0.5rem" }}
              >
                {project.videoTitle}
              </Card.Title>
              <Card.Text
                style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
              >
                {project.videoSubtitle}
              </Card.Text>
              <div className="d-flex align-items-center justify-content-center" style={{
                  boxShadow: "0 2px 5px rgba(255, 255, 255, 0.35)",
                  borderRadius: "16px",
                  height: "55%%",
                  width: "100%" }}>
              <video
                controls
                autoPlay
                muted
                loop
                width="75%"
                style={{
                  boxShadow: "0 2px 5px rgba(255, 255, 255, 0.35)",
                  borderRadius: "12px",
                  height: "60%%",
                  objectFit: "cover",
                }}
              >
                <source src={project.video} type="video/mp4" />
              </video>
              </div>
            </div>
          </div>
          <Card.Title style={{ fontSize: "1.8rem", padding: "01rem" }} className="text-left">
            {project.pagesIntro}
          </Card.Title>

          {/* Section One */}
          <div
            className="container-fluid"
            style={{ minHeight: "28rem", padding: "2rem" }}
          >
            <div className="row align-items-start">
                <div className="col-12 col-md-6 d-flex justify-content-end" style={{ paddingBottom: "0.5rem" }}>
                <img
                  src={project.imageOne}
                  className="img-fluid"
                  style={{ transition: "transform 0.3s ease" }}
                  // style={{ maxWidth: "60%" }}
                  alt=""
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <div className="col-12 col-md-6 text-start">
                <Card.Title
                  style={{ fontSize: "1.5rem", paddingBottom: "0.5rem" }}
                >
                  {project.titleOne}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.subtitleOne}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.descriptionOne}
                </Card.Text>
              </div>
            </div>
          </div>
          {/* SEction two */}
          <div
            className="container-fluid"
            style={{ minHeight: "28rem", padding: "2rem" }}
          >
            <div className="row align-items-start">
               <div className="col-12 col-md-6 d-flex justify-content-end"style={{ paddingBottom: "0.5rem" }}>
                <img
                  src={project.imageTwo}
                  className="img-fluid"
                  style={{ transition: "transform 0.3s ease" }}
                  // style={{ maxWidth: "60%" }}
                  alt=""
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <div className="col-12 col-md-6 text-start">
                <Card.Title
                  style={{ fontSize: "1.5rem", paddingBottom: "0.5rem" }}
                >
                  {project.titleTwo}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.subtitleTwo}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.descriptionTwo}
                </Card.Text>
              </div>
            </div>
          </div>

          {/* Section three*/}
          <div
            className="container-fluid"
            style={{ minHeight: "28rem", padding: "2rem" }}
          >
            <div className="row align-items-start">
               <div className="col-12 col-md-6 d-flex justify-content-end" style={{ paddingBottom: "0.5rem" }}>
                <img
                  src={project.imageThree}
                  style={{ transition: "transform 0.3s ease" }}
                  className="img-fluid"
                  alt=""
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <div className="col-12 col-md-6 text-start">
                <Card.Title
                  style={{ fontSize: "1.5rem", paddingBottom: "0.5rem" }}
                >
                  {project.titleThree}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.subtitleThree}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.descriptionThree}
                </Card.Text>
              </div>
            </div>
          </div>
          {/* Section Six */}
          <div
            className="container-fluid"
            style={{ minHeight: "28rem", padding: "2rem" }}
          >
            <div className="row align-items-start">
              <div className="col-12 col-md-6 d-flex justify-content-end" style={{ paddingBottom: "0.5rem" }}>
                <video
                controls
                autoPlay
                muted
                loop
                width="100%"
                style={{
                  boxShadow: "12 12px 12px rgba(0, 0, 0, 0.35)",
                  borderRadius: "32px",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <source src={project.imageSix} type="video/mp4" />
              </video>
              </div>
              <div className="col-12 col-md-6 text-start">
                <Card.Title
                  style={{ fontSize: "1.5rem", paddingBottom: "0.5rem" }}
                >
                  {project.titleSix}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.subtitleSix}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.descriptionSix}
                </Card.Text>
              </div>
            </div>
          </div>

          {/* Section Four*/}
          <div
            className="container-fluid"
            style={{ minHeight: "28rem", padding: "2rem" }}
          >
            <div className="row align-items-start">
              <div className="col-12 col-md-6 d-flex justify-content-end" style={{ paddingBottom: "0.5rem" }}>
                <img
                  src={project.imageFour}
                  className="img-fluid"
                  style={{ transition: "transform 0.3s ease" }}
                  // style={{ maxWidth: "60%" }}
                  alt=""
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <div className="col-12 col-md-6 text-start">
                <Card.Title
                  style={{ fontSize: "1.5rem", paddingBottom: "0.5rem" }}
                >
                  {project.titleFour}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.subtitleFour}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.descriptionFour}
                </Card.Text>
              </div>
            </div>
          </div>
    

          {/* Section Five*/}
          <div
            className="container-fluid"
            style={{ minHeight: "28rem", padding: "2rem" }}
          >
            <div className="row align-items-start">
              <div className="col-12 col-md-6 d-flex justify-content-end" style={{ paddingBottom: "0.5rem" }}>
                <img
                  src={project.imageFive}
                  style={{ transition: "transform 0.3s ease" }}
                  className="img-fluid"
                  // style={{ maxWidth: "60%" }}
                  alt=""
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <div className="col-12 col-md-6 text-start">
                <Card.Title
                  style={{ fontSize: "1.5rem", paddingBottom: "0.5rem" }}
                >
                  {project.titleFive}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.subtitleFive}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {project.descriptionFive}
                </Card.Text>
              </div>
            </div>
          </div>

          {/* Call to action */}

           <div className="container-fluid d-flex flex-column flex-sm-row justify-content-center">

                <a
                  href={project.github}
                  target="_blank"
                  style={{
                    color: "#212529",
                    backgroundColor: "#f8f9fa",
                    margin: "5px",
                    padding: "0.6rem",
                    textDecoration: "none",
                    fontFamily: "roboto-medium",
                    // minWidth: "150px",
                    minHeight: "50px",
                    minWidth: "16rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize : "1.2rem"
                  }}
                  className=" btn my-1 rounded-5"
                >
                  GitHub
                </a>
                <a
                  href={project.deployed}
                  target="_blank"
                  style={{
                    backgroundColor: "#212529",
                    color: "#f8f9fa",
                    margin: "5px",
                    padding: "0.6rem",
                    textDecoration: "none",
                    fontFamily: "roboto-medium",
                    // minWidth: "150px",
                    minHeight: "50px",
                    minWidth: "16rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize : "1.2rem"
                  }}
                  className=" btn my-1 rounded-5"
                >
                  Application
                </a>
              </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;
