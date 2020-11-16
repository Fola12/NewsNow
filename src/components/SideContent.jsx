import React, { Component } from "react";
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
class SideContent extends Component {
  createSideContent = (article, i) => {
    return (
      <div className="row siderow" key={i}>
        <div className="col-lg-5 col-md-12 col-sm-5 sideImg">
          <img className="img-responsive" src={article.urlToImage} alt="" />
        </div>
        <div className="col-lg-7 col-md-12 col-sm-7 hometitle">
          <p>{article.title}</p>
          <button
            className="btn btn-outline-success"
            onClick={() => this.props.showItem(article.title)}
          >
            Read more..
          </button>
        </div>
      </div>
    );
  };
  render() {
    const shuffledPosts = shuffleArray(this.props.entries);
    let listItems = shuffledPosts.slice(1, 4).map(this.createSideContent);
    return <div className="col-md-12 ">{listItems}</div>;
  }
}

export default SideContent;
