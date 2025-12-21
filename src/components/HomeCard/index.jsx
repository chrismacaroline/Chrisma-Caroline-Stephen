
import { Container, Row, Card } from "react-bootstrap";
import "./style.css";

function HomeCard() {
  return (
    <>
      <Container fluid
        className="d-flex flex-column min-vh-100 justify-content-left align-items-left"
        style={{
          // fontFamily: "roboto-regular-italic",
          // width: "100%",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          paddingTop: "5rem",
          // minHeight : "165vh",
          backgroundColor : "#f8f9fa"
        }}
      >
         <Row
          className="justify-content-start homecard-row"
          style={{
            fontFamily: "roboto-italic",
            fontSize: "2.3rem",
            // padding: "10px",
            paddingTop: "30px",
          }}
        >Chrisma's Portfolio
          {/* <Col>Vanakkam! Swāgatham! Welcome!
</Col> */}
        </Row>
        {/* <Row
          className="homecard-row"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "3rem",
            padding: "10px",
          }}
        >
          This portfolio is a collection of Front-end web development projects and UI/UX design work.
        </Row> */}
        <Row
          className="justify-content-start homecard-row"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "1.7rem",
            paddingTop: "2rem",
          }}
        >Chrisma is a product-oriented front-end developer combining UX thinking with coding and implementation skills to move features from concept to release. She is experienced in real-time messaging products and in creating brand-consistent, user-friendly interfaces for desktop and mobile applications.
        </Row>
        {/* <Row
          className="justify-content-start homecard-row"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "2.5rem",
            paddingTop: "2rem",
          }}
        >Connect with me on LinkedIn and let’s collaborate.
        </Row> */}
        <Row
          className="homecard-row"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "20px",
            padding: "10px",
          }}
        ></Row>
        {/* <Row
          style={{
            fontFamily: "roboto-italic",
            fontSize: "20px",
            padding: "10px",
          }}
        >
          <Col>
            Now, merging my dental expertise with digital skills, I aim to
            create web applications that make a real difference, especially in
            healthcare. This unique blend of backgrounds guides me to innovate
            at the crossroads of health and technology.
          </Col>
        </Row> */}
        <Row
          className="homecard-row"
          style={{
            fontFamily: "roboto-regular-italic",
            fontSize: "20px",
            padding: "10px",
            paddingBottom: "30px",
          }}
        ></Row>

        <Card.Body
          style={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* <Card.Img className="rounded-circle mx-auto" style={{ width: '40%', height: '40%', padding: "35px" }} variant="top" src="../../images/pic.jpeg" />  */}
        </Card.Body>
        {/* </div> */}
      </Container>

      {/* <Skills /> */}
    </>
  );
}

export default HomeCard;
