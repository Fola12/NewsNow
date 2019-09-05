import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import {
  FaUserAlt,
  FaRegCalendarAlt,
  FaPinterestP,
  FaFacebookF,
  FaGoogle,
  FaInstagram
} from "react-icons/fa";
import { IconContext } from "react-icons";

class Contents extends Component {
  render() {
    return (
      <article className="articles">
        <div className="outerText ">
          <h2 className="title">{this.props.title}</h2>

          <span className="author">
            <IconContext.Provider
              value={{ size: "10px", className: "faceicon" }}
            >
              <div>
                <FaUserAlt />
                <span>{this.props.author}</span>
                <FaRegCalendarAlt />
                <span>{this.props.myDate}</span>
              </div>
            </IconContext.Provider>
          </span>
        </div>
        <div className="icongroup">
          <span>
            <IconContext.Provider
              value={{ size: "40px", className: "goggleicon icons" }}
            >
              <FaGoogle />
            </IconContext.Provider>
          </span>
          <span>
            <IconContext.Provider
              value={{ size: "40px", className: "faceIcon icons" }}
            >
              <FaFacebookF />
            </IconContext.Provider>
          </span>
          <span>
            <IconContext.Provider
              value={{ size: "40px", className: "igicon icons" }}
            >
              <FaInstagram />
            </IconContext.Provider>
          </span>
          <span>
            <IconContext.Provider
              value={{ size: "40px", className: "pinicon icons" }}
            >
              <FaPinterestP />
            </IconContext.Provider>
          </span>
        </div>
        <div className="content">
          <div className="col-md-12">
            <img src={this.props.pic} alt="..." className="img-responsive" />
          </div>
          <div className="col-md-12 text">
            <p>{this.props.content}</p>
          </div>
        </div>
      </article>
    );
  }
}

export default Contents;
