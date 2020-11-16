import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

class CategorieCards extends Component {
  render() {
    return (
      <div className="section">
        <img className="img-responsive" src={this.props.src} alt="" />
        <div className="catbottom">
          <span>{this.props.category}</span>
          <h5 className="titles">{this.props.title}</h5>
        </div>
      </div>
    );
  }
}

export default CategorieCards;
