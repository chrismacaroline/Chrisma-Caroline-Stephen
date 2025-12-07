
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"


// eslint-disable-next-line react/prop-types
function Projects ({id,image,name, description, selectProject}) {
  return (
    <Card onClick={() => selectProject(id)} className ="container-fluid d-flex flex-column align-items-start justify-content-start py-5"style={{ width: '65%'}}>
        <Card.Title className="flex-row justify-content-start align-items-start" style={{fontSize: "25px", padding: "10px", color : "#212529", textAlign : "center", fontFamily : "roboto-medium"}}>{name}</Card.Title>
        <Card.Subtitle className="flex-row justify-content-start align-items-start" style={{fontSize: "25px", padding: "10px", color : "#212529", fontFamily : "roboto-medium"}}>{description}</Card.Subtitle>
        <Card.Img variant="top" src={image} className='img-container flex-column' style = {{width : "100%", height : "75%"}}/>
        <Button id={id}  style ={{backgroundColor: "#f8f9fa" , color : "#212529", margin : "5px", alignItems : "left", fontFamily : "roboto-medium"}} onClick={() => selectProject(id)}>
        FIND OUT MORE
      </Button>
    </Card>
  );
}

export default Projects;

