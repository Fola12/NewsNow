import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

class LatestCards extends Component {
  createCards = (article, i) => {
    return (
      <div className="row" key={i}>
        <div className="col-lg-5 col-md-12 col-sm-5 homeImg">
          <img className="img-responsive" src={article.urlToImage} alt="" />
        </div>
        <div className="col-lg-7 col-md-12 col-sm-7 hometitle">
          <p>{article.title}</p>
          <button
            className="btn btn-outline-success"
            onClick={() => this.props.showItem(article.title)}
          >
            Read more...
          </button>
        </div>

        <p className="" />
      </div>
    );
  };

  render() {
    let homeEntries = this.props.entries;
    const listCards = homeEntries.slice(4, 7).map(this.createCards);
    return <div className="homecard">{listCards}</div>;
  }
}

class TopCards extends Component {
  topNews = (article, i) => {
    return (
      <div className="row" key={i}>
        <div className="col-lg-5 col-md-12 col-sm-12 homeImg">
          <img className="img-responsive" src={article.urlToImage} alt="" />
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 hometitle">
          <p>{article.title}</p>
          <button
            className="btn btn-outline-warning"
            onClick={() => this.props.showItem(article.title)}
          >
            Read more...
          </button>
        </div>
        <p className="" />
      </div>
    );
  };

  render() {
    let homeEntries = this.props.entries;
    const listCards = homeEntries.slice(4, 7).map(this.topNews);
    return <div className="homecard">{listCards}</div>;
  }
}
export { LatestCards, TopCards };
