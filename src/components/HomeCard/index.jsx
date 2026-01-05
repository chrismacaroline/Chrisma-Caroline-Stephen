import { Container, Row, Card } from "react-bootstrap";
import "./style.css";

function HomeCard() {
  return (
    <>
      <Container
        className="d-flex flex-column min-vh-100 justify-content-left align-items-left px-3 px-lg-2 py-2 py-lg-3"
        style={{
          backgroundColor: "#f8f9fa",
        }}
      >
        <Row
          className="justify-content-start homecard-row fs-4 fs-lg-1 fw-semibold fs-md-3 py-2"
          style={{
            fontFamily: "roboto-sdemibold",
          }}
        >
          Chrisma's Portfolio
        </Row>
        <Row
          className="justify-content-start homecard-row fs-4 fs-md-4 py-2"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "1.7rem",
            paddingTop: "2rem",
          }}
        >
          Chrisma is a product-oriented front-end developer combining UX
          thinking with coding and implementation skills to move features from
          concept to release. She is experienced in real-time messaging products
          and in creating brand-consistent, user-friendly interfaces for desktop
          and mobile applications.
        </Row>
      </Container>
    </>
  );
}

export default HomeCard;
