import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="row" style={{ position: "fixed", width: "100%", zIndex: "100", top: "0", backgroundColor: "#17a2b8" }}>
      <Navbar bg="info" expand="lg">
        <Navbar.Brand style={{ fontWeight: "bold", fontSize: "1.5rem", padding: "12px", color: "white" }}>TRA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ marginLeft: "94%" }}>
            <NavDropdown title={<span style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>Account</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/user_profile"><Link to="/update_pform" style={{ textDecoration: "none", color: "black" }}>Profile</Link></NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
