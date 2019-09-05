import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Card from "../components/Cards";
import "../components/styles.css";
import moment from "moment";
import Footer from "../components/Footer";

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
        articles.forEach(article => {
          let date = new Date(article.publishedAt);
          article.myDate = moment(date).format("DD MMM YYYY");
        });
        this.setState({ articles: articles });
      });
  }

  showItem = key => {
    this.state.articles.filter((article, i) => {
      if (key === i) {
        this.setState({ data1: article }, () => {
          this.props.history.push({
            pathname: `/${article.myCategory}/display/${i}}`,
            state: { data: this.state.data1, article: this.state.articles }
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
        <Card
          entries={this.state.articles}
          showItem={this.showItem}
          category="ENTERTAINMENT"
        />
        <Footer />
      </>
    );
  }
}

export default Entertainment;
