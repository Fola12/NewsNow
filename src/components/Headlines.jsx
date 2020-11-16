import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { LatestCards, TopCards } from "./HomeCards";
import { withRouter } from "react-router";

class Headlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestnews: [],
      topnews: [],
      data1: []
    };
  }

  componentDidMount() {
    this.fetchData();
    this.fetchLatest();
  }
  fetchData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=506ad282055e4ae5a1828130d3d902c3"
    )
      .then(results => results.json())
      .then(data => {
        const articles = data.articles;
        this.setState({ topnews: articles });
      });
  };

  fetchLatest = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&apiKey=506ad282055e4ae5a1828130d3d902c3"
    )
      .then(results => results.json())
      .then(data => {
        const articles = data.articles;
        this.setState({ latestnews: articles });
      });
  };
  showTopnews = key => {
    let newr = this.state.topnews;

    newr.filter((article, i) => {
      if (key === article.title) {
        this.setState({ data1: article }, () => {
          this.props.history.push({
            pathname: `/display/${i}`,
            state: { data: this.state.data1, article: this.state.topnews }
          });
        });
      }
    });
  };
  showLatestnews = key => {
    let newr = this.state.latestnews;

    newr.filter((article, i) => {
      if (key === article.title) {
        this.setState({ data1: article }, () => {
          this.props.history.push({
            pathname: `/display/${i}`,
            state: { data: this.state.data1, article: this.state.latest }
          });
        });
      }
    });
  };

  render() {
    return (
      <>
        <div className="row header" id="recent_news">
          <div className="col-md-6 headnews">
            <span>LATEST NEWS</span>
            <p className="divider" />
            <LatestCards
              entries={this.state.latestnews}
              showItem={this.showLatestnews}
            />
          </div>
          <div className="col-md-6 topnews">
            <span>TOP NEWS</span>
            <p className="divider" />
            <TopCards
              entries={this.state.topnews}
              showItem={this.showTopnews}
            />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Headlines);
