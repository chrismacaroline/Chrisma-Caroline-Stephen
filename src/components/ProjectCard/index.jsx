import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import  "../../main.css"

function ProjectCard({
  id,
  image,
  name,
  github,
  deployed,
  description,
  skill,
}) {
  return (
    <div className="projectcard">
      <Row>
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={image} className="img-fluid" style={{maxWidth: "100%", height: "auto"}} />
            <Card.Body>
              <Card.Title className="text-center">{name}</Card.Title>
              <Card.Text className="text-center">
                {description}
                {/* {skill} */}
              </Card.Text>
              <div className="flex-row flex-sm-row justify-content-around">
                <a
                  href={github}
                  target="_blank"
                  style={{
                    backgroundColor: "#212529",
                    color: "212529",
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
                <a
                  href={deployed}
                  target="_blank"
                  style={{
                    backgroundColor: "#212529",
                    color: "212529",
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
                  Application
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectCard;


