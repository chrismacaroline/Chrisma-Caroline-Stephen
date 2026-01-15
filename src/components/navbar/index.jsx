import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function NavBar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation ();
  return (
    <Navbar expand="lg" className="container-fluid navbarmain px-lg-5 px-sm-2" expanded={expanded} onToggle={() => setExpanded(true)}>
    <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" className="custom-toggler">
    <FontAwesomeIcon icon={faBars} />
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="w-full d-flex align-items-center">
        <Link
          id= "nav-link"
          expanded={expanded}
          onClick={() => setExpanded(false)}
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
            expanded={expanded}
            onClick={() => setExpanded(false)}
            className={`custom-nav-link ${location.pathname === "/projects" ? "active" : ""}`}
            style={{
              color: "#212529",
              fontFamily: "roboto-black-italic",
              fontSize: "24px",
            }}
            to="/projects"
          >
            Front-End & UX Projects
          </Link>

          {/* <Link
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
          </Link> */}

          <Link
            id= "nav-link"
            expanded={expanded}
            onClick={() => setExpanded(false)}
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
