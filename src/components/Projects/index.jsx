
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"
import { useNavigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
function Projects ({id,image,name, description}) {
    const navigate = useNavigate();
  return (
    <Card className ="container-fluid d-flex flex-column h-100 align-items-start justify-content-center" style={{boxShadow:  "0 2px 8px rgba(13, 13, 13, 0.2)"}}>
        <Card.Title className="flex-row justify-content-start align-items-start fs-3 fs-md-3 fs-lg-3 px-lg-3 px-1 py-1 fw-normal">{name}</Card.Title>
        <Card.Subtitle className="flex-row justify-content-start align-items-start fs-4 fs-md-4 fs-lg-4 px-lg-3 px-1 py-1 fw-light">{description}</Card.Subtitle>
        <Card.Img variant="top" src={image} className='mx-auto d-block img-container flex-column d-flex justify-content-center fs-4 fs-md-3 fs-lg-1 px-lg-3 px-1 py-1 fw-medium'/>
        <Button id={id}  variant="light" className='mx-auto mt-auto d-block rounded-3'style ={{backgroundColor: "#212529" , color : "#f8f9fa", margin : "5px", fontFamily : "roboto-medium", padding: "0.8rem", paddingLeft: "6rem", paddingRight: "6rem"}}  onClick={() => navigate(`/projects/${id}`)}>
        VIEW PROJECT
      </Button>
    </Card>
  );
}

export default Projects;

