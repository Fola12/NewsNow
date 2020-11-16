import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.css";

class Navs extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar className="mens" expand="md">
          <Navbar.Toggle
            className="navtoggle"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto men">
              <NavLink exact to="/">
                Home
              </NavLink>

              <NavLink to="/business">Busines</NavLink>

              <NavLink to="/entertain">Entertainment</NavLink>

              <NavLink to="/sports">Sports</NavLink>

              <NavLink to="/health">Health</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <p className="navdivide" />
      </>
    );
  }
}

export default Navs;
