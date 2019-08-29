import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Card from "../components/Cards";
import "../components/styles.css";

class Sports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [],
      articles: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=506ad282055e4ae5a1828130d3d902c3"
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
            title="Sports Now"
            subtitle="Bringing you The Latest in Sports"
          />
        </Hero>
        <Card entries={this.state.articles} showItem={this.showItem} />;
      </>
    );
  }
}

export default Sports;
