import Card from "react-bootstrap/Card";
import {  Button } from "react-bootstrap";
// import "../../main.css";
// import projects.json;

function CQI() {
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
            TEST TEST
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default CQI;
