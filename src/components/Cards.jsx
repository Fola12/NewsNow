import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Card extends Component {
  createTasks = (article, i) => {
    return (
      <div className="col-lg-4 col-md-6" key={i}>
        <div className="card">
          <img src={article.urlToImage} alt="" />
          <div className="card-body">
            <span className="category">{this.props.category}</span>
            <h5>{article.title}</h5>
            <p className="card-text ">{article.description}</p>
            <button
              className="btn btn-outline-danger"
              onClick={() => this.props.showItem(i)}
            >
              Read more...
            </button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);
    return <div className="row cardrow">{listItems}</div>;
  }
}
export default Card;
