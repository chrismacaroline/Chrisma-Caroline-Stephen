
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"


function Projects ({id,image,name, github,deployed,skill, selectProject}) {
  return (
    <div className='container-fluid d-flex'>
    <Card className ="d-flex flex-wrap justify-content-center col"style={{ width: '100%',maxWidth: "20rem", height : '26rem', border: "2px solid #64002f"}}>
      <Card.Img variant="top" src={image} className='img-container' style = {{width : "100%"}}/>
      <Card.Body className="content d-flex flex-column justify-content-center align-items-center">
        <Card.Title style={{fontSize: "25px", padding: "10px", color : "#474787", textAlign : "center", fontFamily : "roboto-medium"}}>{name}</Card.Title>
        <Card.Text style={{fontSize: "15px", padding: "10px", color : "#474787", textAlign : "center", fontFamily : "roboto-medium"}}>{skill}</Card.Text>
      
        <Button id={id}  style ={{backgroundColor : " #212529", color : "212529", margin : "5px", alignItems : "center", fontFamily : "roboto-medium"}} onClick={() => selectProject(id)}>
        FIND OUT MORE
      </Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Projects;

