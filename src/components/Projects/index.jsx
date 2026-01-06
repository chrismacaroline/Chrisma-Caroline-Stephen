
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css"
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Projects ({id,image,name, description}) {
    const navigate = useNavigate();

  return (
    <Card
  className="d-flex flex-column h-100 w-100 border border-1"
  style={{
    // backgroundColor: "#f8f9fa",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
    borderRadius: "4px",
    borderColor: "#212529"
  }}
>
  {/* Image */}
  <div
    // className="w-100"
    style={{
       aspectRatio: "16 / 9",
    overflow: "hidden",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    // backgroundColor: "#f1f3f5",
    }}
  >
    <img
      src={image}
    alt={name}
    className="w-100 h-100"
    style={{ objectFit: "contain" }}
    />
  </div>

  {/* Content */}
  <div className="px-3 py-3 d-flex flex-column flex-grow-1">
    <Card.Title className="fs-5 fw-semibold mb-2">
      {name}
    </Card.Title>

    <Card.Text className="fs-6 text-muted mb-3">
      {description}
    </Card.Text>

    {/* CTA */}
    <div className="mt-auto d-flex justify-content-end">
      <Button id={id}  variant="light" className='ms-auto rounded-3'style ={{backgroundColor: "#212529"}}  onClick={() => {if(id === 'cqi') {navigate(`/projects/cqi`)} else {navigate(`/projects/${id}`)}}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" fill="#f8f9fa">
  <path fillRule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
</svg>

      </Button>
    </div>
  </div>
</Card>

  );
}

export default Projects;

