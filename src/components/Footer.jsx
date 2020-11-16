import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="footertop">
          <div className="container-fluid">
            <div className="row rows">
              <div className=" col-md-3 footertext">
                <h2>NEWSNOW</h2>
                <p>NEWS YOU TRUST</p>
              </div>
              <div className="col-md-9">
                <div className="row nxrow">
                  <div className="col-md-7">
                    <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                  </div>
                  <div className="col-md-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footermiddle">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul>
                  <li>Home</li>
                  <li>Business</li>
                  <li>Entertainment</li>
                  <li>Health</li>
                  <li>Sport</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Most Visited</h5>
                <ul>
                  <li>
                    <a href="#recent_news">Top news</a>
                  </li>
                  <li>Business</li>
                  <li>Latest News</li>
                  <li>International</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Contact us</h5>
                <p>
                  Email: <span>Newsnow@info.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
