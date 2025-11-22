import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  // const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expand="lg" className="container-fluid navbarmain">
  <Container className="p-2">

    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
      <FontAwesomeIcon icon={faBars} style={{ color: "#212529" }} />
    </Navbar.Toggle>

    <Navbar.Collapse id="basic-navbar-nav" className="custom-toggler">
      <Nav className="w-100 d-flex align-items-center">

        {/* LEFT LINK */}
        <Link
          id= "nav-link"
          className="me-auto"
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

  </Container>
</Navbar>

  );
}

export default NavBar;
