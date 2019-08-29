import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

class Contents extends Component {
  render() {
    return (
      <article className="articles">
        <div className="col-md-6">
          <img
            src={this.props.pic}
            alt="..."
            className="img-responsive float-left"
          />
        </div>
        <div className="outerText mr-auto">
          <h2 className="title">{this.props.title}</h2>
          <p className="author">
            by: <strong>{this.props.author}</strong>
          </p>
          <hr align="right" width="50%" />

          <p>{this.props.content}</p>
        </div>
      </article>
    );
  }
}

export default Contents;
