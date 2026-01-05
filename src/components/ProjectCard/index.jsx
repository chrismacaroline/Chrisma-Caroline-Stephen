/* eslint-disable react/prop-types */

import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "../../main.css";
import projects from "../../projects.json";
import { useParams } from "react-router-dom";

function ProjectCard() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  return (
    <>
      <Card
        xs={12}
        sm={10}
        md={8}
        lg={6}
        xl={4}
        className="container-fluid display-flex justify-content-center mb-4 border-1 bg-transparent"
        style={{ width: "95%", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)" }}
      >
        <Card.Body className="container-fluid display-flex justify-content-center">
          <Card.Title className="fs-2 fs-md-2 mb-2 text-start">
            {project.name}
          </Card.Title>

          <Card.Text className="fs-4 fs-md-4 mb-3 text-start text-muted">
            {project.description}
          </Card.Text>

          <div className="w-100 overflow-hidden rounded-3">
            <img
              src={project.imageMain}
              alt={project.name}
              className="img-fluid w-100"
              style={{
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>

          {/* Video Section */}
          <div
            style={{
              minHeight: "24rem",
              paddingTop: "2rem",
              paddingBottom: "4rem",
            }}
          >
            <div className="row align-items-center justify-content-center">
              <Card.Title className="fs-2 fs-md-2 mb-2 text-start">
                {project.videoTitle}
              </Card.Title>
              <Card.Text className="fs-4 fs-md-4 mb-3 text-start text-muted">
                {project.videoSubtitle}
              </Card.Text>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  boxShadow: "0 2px 5px rgba(255, 255, 255, 0.35)",
                  borderRadius: "16px",
                  height: "55%%",
                  width: "100%",
                }}
              >
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  width="85%"
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
          <Card.Title className="fs-2 fs-md-2 mb-2 text-start">
            {project.pagesIntro}
          </Card.Title>

          {/* Section One */}
          <section className="container-fluid py-3 py-md-4 py-lg-5">
            <div className="row align-items-start gy-3 gy-md-4">
              {/* Image */}
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <img
                  src={project.imageOne}
                  alt={project.titleOne}
                  className="img-fluid w-100 rounded-3"
                  style={{
                    maxWidth: "720px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* Text */}
              <div className="col-12 col-md-6 text-start">
                <Card.Title className="fs-3 fs-md-3 mb-2">
                  {project.titleOne}
                </Card.Title>

                <Card.Text className="fs-4 fs-md-4 mb-2 text-muted">
                  {project.subtitleOne}
                </Card.Text>

                <Card.Text className="fs-4 fs-md-4">
                  {project.descriptionOne}
                </Card.Text>
              </div>
            </div>
          </section>

          {/* Section two */}
          <section className="container-fluid py-3 py-md-4 py-lg-5">
            <div className="row align-items-start gy-3 gy-md-4">
              {/* Image */}
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <img
                  src={project.imageTwo}
                  alt={project.titleTwo}
                  className="img-fluid w-100 rounded-3"
                  style={{
                    maxWidth: "720px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* Text */}
              <div className="col-12 col-md-6 text-start">
                <Card.Title className="fs-3 fs-md-3 mb-2">
                  {project.titleTwo}
                </Card.Title>

                <Card.Text className="fs-4 fs-md-4 mb-2 text-muted">
                  {project.subtitleTwo}
                </Card.Text>

                <Card.Text className="fs-4 fs-md-4">
                  {project.descriptionTwo}
                </Card.Text>
              </div>
            </div>
          </section>
          
        

          {/* Section three*/}
          <section className="container-fluid py-3 py-md-4 py-lg-5">
            <div className="row align-items-start gy-3 gy-md-4">
              {/* Image */}
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <img
                  src={project.imageThree}
                  alt={project.titlethree}
                  className="img-fluid w-100 rounded-3"
                  style={{
                    maxWidth: "720px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* Text */}
              <div className="col-12 col-md-6 text-start">
                <Card.Title className="fs-3 fs-md-3 mb-2">
                  {project.titleThree}
                </Card.Title>

                <Card.Text className="fs-4 fs-md-4 mb-2 text-muted">
                  {project.subtitleThree}
                </Card.Text>

                <Card.Text className="fs-4 fs-md-4">
                  {project.descriptionThree}
                </Card.Text>
              </div>
            </div>
          </section>
          
          {/* Section Six */}
          <section className="container-fluid py-3 py-md-4 py-lg-5">
            <div className="row align-items-start gy-3 gy-md-4">
              {/* Image */}
              <div className="col-12 col-md-6 d-flex justify-content-center">
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

              {/* Text */}
              <div className="col-12 col-md-6 text-start">
                <Card.Title className="fs-3 fs-md-3 mb-2">
                  {project.titleSix}
                </Card.Title>

                <Card.Text className="fs-4 fs-md-4 mb-2 text-muted">
                  {project.subtitleSix}
                </Card.Text>

                <Card.Text className="fs-4 fs-md-4">
                  {project.descriptionSix}
                </Card.Text>
              </div>
            </div>
          </section>
          

          {/* Section Four*/}
          <section className="container-fluid py-3 py-md-4 py-lg-5">
            <div className="row align-items-start gy-3 gy-md-4">
              {/* Image */}
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <img
                  src={project.imageFour}
                  alt={project.titleFour}
                  className="img-fluid w-100 rounded-3"
                  style={{
                    maxWidth: "720px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* Text */}
              <div className="col-12 col-md-6 text-start">
                <Card.Title className="fs-3 fs-md-3 mb-2">
                  {project.titleFour}
                </Card.Title>

                <Card.Text className="fs-4 fs-md-4 mb-2 text-muted">
                  {project.subtitleFour}
                </Card.Text>

                <Card.Text className="fs-4 fs-md-4">
                  {project.descriptionFour}
                </Card.Text>
              </div>
            </div>
          </section>
          
          {/* Section Five*/}
          <section className="container-fluid py-3 py-md-4 py-lg-5">
            <div className="row align-items-start gy-3 gy-md-4">
              {/* Image */}
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <img
                  src={project.imageFive}
                  alt={project.titleFive}
                  className="img-fluid w-100 rounded-3"
                  style={{
                    maxWidth: "720px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* Text */}
              <div className="col-12 col-md-6 text-start">
                <Card.Title className="fs-3 fs-md-3 mb-2">
                  {project.titleFive}
                </Card.Title>

                <Card.Text className="fs-4 fs-md-4 mb-2 text-muted">
                  {project.subtitleFive}
                </Card.Text>

                <Card.Text className="fs-4 fs-md-4">
                  {project.descriptionFive}
                </Card.Text>
              </div>
            </div>
          </section>
          
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
                fontSize: "1.2rem",
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
                fontSize: "1.2rem",
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
