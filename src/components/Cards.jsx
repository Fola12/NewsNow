import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Card extends Component {
  createTasks = (article, i) => {
    return (
      <div class="col-lg-4 col-md-6" key={i}>
        <div class="card">
          <img src={article.urlToImage} alt="" />
          <div class="card-body">
            <span className="category">{this.props.category}</span>
            <h5>{article.title}</h5>
            <p class="card-text ">{article.description}</p>
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
    return <div class="row cardrow">{listItems}</div>;
  }
}
export default Card;
