import { Card, Container, Button } from "react-bootstrap";
import UIUXProjectsGallery from "../UIUXProjectgallery";
import UIUXProjectcard from "../UIUXProjectcard";
import uiuxprojectsdata from "../../uiuxprojects.json"


function UIUXProjects({ id, Title, Description, selectuiuxproject,Buttonlabel, Image }) {
  return (
   
      <Container
        className="container-fluid d-flex justify-content-center"
        style={{ padding: "0px", minHeight : "40vh"}}
      >
        <Card    
          className="d-flex flex-wrap justify-content-center"
          style={{ width: '100%',maxWidth: "20rem", height : '26rem', border: "2px solid #64002f" }}
        >
          <Card.Img variant="top" src={Image} style = {{width : "100%"}}/>
          <Card.Body className="justify-content-center content d-flex flex-column align-items-center">
            <Card.Title style={{fontSize: "25px", padding: "10px", color : "#474787", textAlign : "center", fontFamily : "roboto-medium"}}>{Title}</Card.Title>
            <Card.Text style={{fontSize: "15px", padding: "10px", color : "#474787", textAlign : "center", fontFamily : "roboto-medium"}}>{Description}</Card.Text>
            <Button 
             style ={{backgroundColor : " #212529", color : "212529", margin : "5px", alignItems : "center", fontFamily : "roboto-medium"}}
              onClick={() =>
                selectuiuxproject(id)}
            >
              {Buttonlabel}
            </Button>
          </Card.Body>
        </Card>
      </Container>
  
  );
}
export default UIUXProjects;


