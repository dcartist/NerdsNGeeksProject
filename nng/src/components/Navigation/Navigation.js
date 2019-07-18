import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";
import { Link } from "react-router-dom";


class Navigation extends Component {
  render() {
    return (
      <div>
        
<Navbar collapseOnSelect expand="lg"  className = "Navbar"variant="dark">
  <Navbar.Brand href="/">NNG social</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/game" className="nav-link">Games</Link>
      <Link to="/blog" className="nav-link">Updates</Link>
      <Link to="/admin" className="nav-link">Admin</Link>
    </Nav>
    <Nav>
      <Link to="/news" className="nav-link">News</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
      {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}

export default Navigation;