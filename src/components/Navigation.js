import React from 'react';
// import pages

//import router
import { Link } from "react-router-dom";
// import navigation bar component from bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css'

function Navigation() {


    return(
    <div>
    <Navbar collapseOnSelect  bg="dark" variant="dark" expand="lg">
      <Container className="navbarContainer">
      <Link to="/"><Navbar.Brand>Tyson Hesketh</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="container-fluid">
        <Nav.Link href="#">
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link href="#">
          <Link to="/About">About</Link>
        </Nav.Link>
        <Nav.Link href="#">
          <Link to="/Resume">Resume</Link>
        </Nav.Link>
        <Nav.Link href="#">
          <Link to="/Contact">Contact</Link>
        </Nav.Link>
        <Nav.Item className="ms-auto">
      <Nav.Link >Log In</Nav.Link>
      </Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    );
    
    }
    
    
    export default Navigation;