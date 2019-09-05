import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Navs from "./Navs";
class Navbar extends Component {
  render() {
    return (
      <div className="navarea">
        <div className="top">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Advertise</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Privacy & Policy</a>
            </li>
          </ul>
        </div>
        <div className="logotext">
          <h2>NEWSNOW</h2>
          <p>NEWS YOU TRUST</p>
        </div>
        <Navs />
      </div>
    );
  }
}

export default Navbar;
