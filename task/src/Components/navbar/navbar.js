import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./navbar.css";

const CustomNavbar = () => {
  const favorites = useSelector((state) => state.favorites);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="md" variant="dark" className="navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-logo">
        My Website
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggleNav} aria-controls="navbar-menu" />
      <Navbar.Collapse id="navbar-menu" className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="navbar-item">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="navbar-item">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="navbar-item">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/favorites" className="navbar-item">
            Favorite Movies
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Item>
            <Nav.Link disabled>Favorites Count: {favorites.length}</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
