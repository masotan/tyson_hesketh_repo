import React from 'react';
// import pages

//import router
import { Link } from "react-router-dom";
// import navigation bar component from bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navigation() {


    return(
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>Tyson Hesketh</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav>
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/About">About</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/Resume">Resume</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/Contact">Contact</Link>
        </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    );
    
    }
    
    
    export default Navigation;