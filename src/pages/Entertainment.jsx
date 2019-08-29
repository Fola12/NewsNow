import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Card from "../components/Cards";
import "../components/styles.css";

class Entertainment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: [],
      articles: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=506ad282055e4ae5a1828130d3d902c3"
    )
      .then(results => results.json())
      .then(data => {
        console.log(data.articles);
        const articles = data.articles;
        this.setState({ articles: articles });
      });
  }
  showItem = key => {
    this.state.articles.filter((article, i) => {
      if (key == i) {
        this.setState({ data1: article }, () => {
          this.props.history.push({
            pathname: `/display/${i}`,
            state: { data: this.state.data1 }
          });
          console.log(this.state.data1);
        });
      }
    });
  };

  render() {
    return (
      <>
        <Hero>
          <Banner
            title="Entertainment Now"
            subtitle="Bringing you The Latest Scope from The Entertainment Industry"
          />
        </Hero>
        <Card entries={this.state.articles} showItem={this.showItem} />;
      </>
    );
  }
}

export default Entertainment;
