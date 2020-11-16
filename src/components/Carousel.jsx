import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Carousels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [],
      articles: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&apiKey=506ad282055e4ae5a1828130d3d902c3"
    )
      .then(results => results.json())
      .then(data => {
        const articles = data.articles;
        this.setState({ articles: articles });
      });
  }

  renderAlbums() {
    return this.state.articles.map((news, i) => {
      return (
        <div key={i}>
          <img src={news.urlToImage} alt="" />
          <div className="bottom">
            <span>HEADLINE NEWS</span>
            <h2>{news.title}</h2>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className=" container-fluid">
        <div className="row">
          <Carousel
            className="carousels"
            showArrows={true}
            infiniteLoop
            autoPlay
          >
            {this.renderAlbums()}
          </Carousel>
        </div>
      </div>
    );
  }
}
export default Carousels;
