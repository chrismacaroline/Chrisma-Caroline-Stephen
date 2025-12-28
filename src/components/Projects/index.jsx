
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"
import { useNavigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
function Projects ({id,image,name, description}) {
    const navigate = useNavigate();
  return (
    <Card className ="container-fluid d-flex flex-column h-100 px-0 align-items-start justify-content-center" style={{boxShadow:  "0 2px 8px rgba(13, 13, 13, 0.2)"}}>
        <Card.Title className="flex-row justify-content-start align-items-start fs-4 fs-md-4 fs-lg-4 px-lg-2 px-2 py-1 fw-medium">{name}</Card.Title>
          <Card.Img variant="top" src={image} className='img-fluid mx-auto d-block'/>
          <Card.Subtitle className="flex-row justify-content-start align-items-start roboto-light fs-4 fs-md-4 fs-lg-4 px-lg-2 px-2 py-3 fw-light"  style ={{ fontFamily: "roboto-italic"}}>{description}</Card.Subtitle>
        <div className="d-flex w-100 mt-auto">
        <Button id={id}  variant="light" className='ms-auto rounded-3'style ={{backgroundColor: "#212529"}}  onClick={() => navigate(`/projects/${id}`)}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" fill="#f8f9fa">
  <path fillRule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
</svg>

      </Button>
      </div>
    </Card>
  );
}

export default Projects;

