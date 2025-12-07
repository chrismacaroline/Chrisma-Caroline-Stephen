import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  // const [expanded, setExpanded] = useState(false);
  const location = useLocation ();
  return (
    <Navbar expand="lg" className="container-fluid navbarmain px-5">
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
    <FontAwesomeIcon icon={faBars} style={{ color: "#212529" }} />
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav" className="custom-toggler">
    <Nav className="w-full d-flex align-items-center">
        <Link
          id= "nav-link"
          className={`me-auto custom-nav-link ${location.pathname === "/" ? "active" : ""}`}
          style={{
            color: "#212529",
            fontFamily: "roboto-black-italic",
            fontSize: "24px",
          }}
          to="/"
        >
          Chrisma Caroline Stephen
        </Link>

        <div className="d-flex gap-4">
          <Link
            id= "nav-link"
            className={`custom-nav-link ${location.pathname === "/projects" ? "active" : ""}`}
            style={{
              color: "#212529",
              fontFamily: "roboto-black-italic",
              fontSize: "24px",
            }}
            to="/projects"
          >
            Front-End Projects
          </Link>

          <Link
            id= "nav-link"
            className={`custom-nav-link ${location.pathname === "/uiuxprojects" ? "active" : ""}`}
            style={{
              color: "#212529",
              fontFamily: "roboto-black-italic",
              fontSize: "24px",
            }}
            to="/uiuxprojects"
          >
            UI/UX Projects
          </Link>

          <Link
            id= "nav-link"
            className={`custom-nav-link ${location.pathname === "/contact" ? "active" : ""}`}
            style={{
              color: "#212529",
              fontFamily: "roboto-black-italic",
              fontSize: "24px",
            }}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </Nav>
    </Navbar.Collapse>
</Navbar>

  );
}

export default NavBar;
