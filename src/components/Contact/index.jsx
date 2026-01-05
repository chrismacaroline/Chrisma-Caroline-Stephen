import Button from "react-bootstrap/Button";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Links from "../LInks";
import { Col, Container, Row } from "react-bootstrap";
import "../../main.css"

const Contact = () => {

  return (
      <Container className="container-fluid d-flex min-vh-100 justify-content-center align-items-center" style={{ backgroundColor: "#f8f9fa",color: "#212529" }}>
        <div>
          {/* <p
           
            style={{
              color: "#212529",
              fontSize: "1.5rem",
              fontFamily: "roboto-medium",
              textAlign: "center",
            }}
          >
            Get in touch to chat!
          </p>
          <p
           
            style={{
              color: "#212529",
              fontSize: "1.5rem",
              fontFamily: "roboto-medium",
              textAlign: "center",
            }}
          >
            {" "}
            Let's connect!{" "}
          </p> */}
          <div className="linkicon">
            {" "}
            <Links />
          </div>

          {/* <div className="d-flex align-items-center justify-content-center">
            <a
              href="/images/CV.pdf"
              download="Chrisma Stephen CV.pdf"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="primary"
                className="roboto-medium download-button"
                style={{
                  marginTop: "30px",
                  marginBottom: "30px",
                  fontSize: "20px",
                  backgroundColor: "#212529",
                  color: "#212529",
                }}
              >
                <FontAwesomeIcon icon={faDownload} /> My Resume
              </Button>
            </a>
          </div> */}
        </div>
      </Container>
  );
};

export default Contact;
