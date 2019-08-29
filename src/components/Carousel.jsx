/*import React, { Component } from "react";
import "./styles.css";
import { Gallery, GalleryImage } from "react-gesture-gallery";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [],
      articles: [],
      index: 0,
      setIndex: 0
    
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&apiKey=506ad282055e4ae5a1828130d3d902c3"
    )
      .then(results => results.json())
      .then(data => {
        console.log(data.articles);
        const articles = data.articles;
        this.setState({ articles: articles });
      });
  }

  render() {
  
    return (
      <>
        <div style={{ background: "black", width: "100vw", height: "100vh" }}>
      <Gallery
        index={this.state.index}
        onRequestChange={i => {
          this.setState({ setIndex: i });
        }}
      >
        {this.state.articles.map(pic => (
          <GalleryImage objectFit="contain" key={pic.src} src={pic.urlToImage} />
        ))}
        
      </Gallery>
    </div>
      </>
    );
  }
}
*/
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
        console.log(data.articles);
        const articles = data.articles;
        this.setState({ articles: articles });
      });
  }

  renderAlbums() {
    return this.state.articles.map((news, i) => {
      return (
        <div id={i}>
          <img src={news.urlToImage} alt="" />
          <p>{news.description}</p>
        </div>
      );
    });
  }
  render() {
    return (
      <Carousel className="carousels" infiniteLoop autoPlay swipeable={false}>
        {this.renderAlbums()}
      </Carousel>
    );
  }
}
export default Carousels;
