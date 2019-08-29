import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="logotext">
          <h2>NEWSNOW</h2>
        </div>
        <div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/entertain">Entertainment</Link>
            </li>
            <li>
              <Link to="/sports">Sports</Link>
            </li>
            <li>
              <Link to="/health">Health</Link>
            </li>
          </ul>
          
          <p className="navdivide" />
        </div>
      </>
    );
  }
}

export default Navbar;
