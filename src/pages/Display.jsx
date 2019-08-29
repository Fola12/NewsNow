import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Contents from "../components/Contents";
class Display extends Component {
  componentDidMount() {
    console.log(this.props.location.state.data);
  }

  renderAlbums() {
    let news = this.props.location.state.data;
    return (
      <Contents
        pic={news.urlToImage}
        title={news.title}
        content={news.content}
        author={news.author}
      />
    );
  }

  render() {
    return <>{this.renderAlbums()}</>;
  }
}
export default Display;
