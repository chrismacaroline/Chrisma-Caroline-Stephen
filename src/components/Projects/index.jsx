
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"
import { useNavigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
function Projects ({id,image,name, description}) {
    const navigate = useNavigate();
  return (
    <Card className ="container-fluid d-flex flex-column align-items-start justify-content-center py-5"style={{ width: '90%'}}>
        <Card.Title className="flex-row justify-content-start align-items-start" style={{fontSize: "25px", padding: "10px", color : "#212529", fontFamily : "roboto-medium"}}>{name}</Card.Title>
        <Card.Subtitle className="flex-row justify-content-start align-items-start" style={{fontSize: "25px", padding: "10px", color : "#212529", fontFamily : "roboto-medium"}}>{description}</Card.Subtitle>
        <Card.Img variant="top" src={image} className='mx-auto d-block img-container flex-column d-flex justify-content-center' style = {{ padding: "2rem", width : "75%", height : "75%"}}/>
        <Button id={id}  variant="light" className='mx-auto d-block rounded-3'style ={{backgroundColor: "#212529" , color : "#f8f9fa", margin : "5px", fontFamily : "roboto-medium", padding: "0.8rem", paddingLeft: "6rem", paddingRight: "6rem"}}  onClick={() => navigate(`/projects/${id}`)}>
        VIEW PROJECT
      </Button>
    </Card>
  );
}

export default Projects;

