import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Card extends Component {
  createTasks = (article, i) => {
    return (
      <div class="col-md-4" key={i}>
        <div class="card">
          <div class="card-header">{article.title}</div>
          <img src={article.urlToImage} alt="" />
          <div class="card-body">
            <p class="card-text ">{article.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => this.props.showItem(i)}
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);
    return <div class="row">{listItems}</div>;
  }
}
export default Card;
