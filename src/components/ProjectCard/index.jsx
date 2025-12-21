/* eslint-disable react/prop-types */

import Card from "react-bootstrap/Card";
import {  Button } from "react-bootstrap";
import "../../main.css";

function ProjectCard(props) {
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
            {props.name}
          </Card.Title>
          <Card.Subtitle style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }} className="text-left">
            {props.description}
          </Card.Subtitle>
          <Card.Img
            variant="top"
            src={props.imageMain}
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
                {props.videoTitle}
              </Card.Title>
              <Card.Text
                style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
              >
                {props.videoSubtitle}
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
                <source src={props.video} type="video/mp4" />
              </video>
              </div>
            </div>
          </div>
          <Card.Title style={{ fontSize: "1.8rem", padding: "01rem" }} className="text-left">
            {props.pagesIntro}
          </Card.Title>

          {/* Section One */}
          <div
            className="container-fluid"
            style={{ minHeight: "28rem", padding: "2rem" }}
          >
            <div className="row align-items-start">
                <div className="col-12 col-md-6 d-flex justify-content-end" style={{ paddingBottom: "0.5rem" }}>
                <img
                  src={props.imageOne}
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
                  {props.titleOne}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.subtitleOne}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.descriptionOne}
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
                  src={props.imageTwo}
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
                  {props.titleTwo}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.subtitleTwo}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.descriptionTwo}
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
                  src={props.imageThree}
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
                  {props.titleThree}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.subtitleThree}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.descriptionThree}
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
                <source src={props.imageSix} type="video/mp4" />
              </video>
              </div>
              <div className="col-12 col-md-6 text-start">
                <Card.Title
                  style={{ fontSize: "1.5rem", paddingBottom: "0.5rem" }}
                >
                  {props.titleSix}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.subtitleSix}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.descriptionSix}
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
                  src={props.imageFour}
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
                  {props.titleFour}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.subtitleFour}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.descriptionFour}
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
                  src={props.imageFive}
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
                  {props.titleFive}
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.subtitleFive}
                </Card.Text>
                <Card.Text
                  style={{ fontSize: "1.2rem", paddingBottom: "0.5rem" }}
                >
                  {props.descriptionFive}
                </Card.Text>
              </div>
            </div>
          </div>

          {/* Call to action */}

           <div className="container-fluid d-flex flex-column flex-sm-row justify-content-center">

                <a
                  href={props.github}
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
                  href={props.deployed}
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
