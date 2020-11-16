import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Card from "../components/Cards";
import "../components/styles.css";
import moment from "moment";
import Footer from "../components/Footer";
class Health extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: [],
      articles: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=506ad282055e4ae5a1828130d3d902c3"
    )
      .then(results => results.json())
      .then(data => {
        const articles = data.articles;
        articles.forEach(article => {
          let date = new Date(article.publishedAt);
          article.myDate = moment(date).format("DD MMM YYYY");
        });
        this.setState({ articles: articles });
      });
  }

  showItem = key => {
    return this.state.articles.filter((article, i) => {
      if (key === i) {
        this.setState({ data1: article }, () => {
          this.props.history.push({
            pathname: `/${article.myCategory}/display/${i}}`,
            state: { data: this.state.data1, article: this.state.articles }
          });
        });
      }
    });
  };

  render() {
    return (
      <>
        <Hero>
          <Banner
            title="Health Now"
            subtitle="Bringing you The Latest in Health"
          />
        </Hero>
        <Card
          entries={this.state.articles}
          showItem={this.showItem}
          category="HEALTH"
        />
        <Footer />
      </>
    );
  }
}

export default Health;
