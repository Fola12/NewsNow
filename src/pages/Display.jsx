import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Contents from "../components/Contents";
import SideContent from "../components/SideContent";
import Footer from "../components/Footer";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: {},
      newss: []
    };
  }
  componentDidMount() {
    console.log(this.props.location.state.data);
    this.setState({ newss: this.props.location.state.article });
    {
      console.log(this.state.newss);
    }
    console.log(this.state.newss);
  }

  renderAlbums() {
    let news = this.props.location.state.data;
    return (
      <Contents
        pic={news.urlToImage}
        title={news.title}
        content={news.content}
        author={news.author}
        myDate={news.myDate}
      />
    );
  }

  renderSideContent() {
    let posts = this.props.location.state.article;
    console.log(posts);
    return (
      <SideContent
        entries={this.props.location.state.article}
        showItem={this.showItem}
      />
    );
  }
  showItem = key => {
    let newr = this.props.location.state.article;

    newr.filter((article, i) => {
      if (key === article.title) {
        this.setState({ data1: article }, () => {
          this.props.history.push({
            pathname: `/display/${i}`,
            state: { data: this.state.data1, article: this.state.newss }
          });
          console.log(this.state.data1);
        });
      }
    });
  };

  render() {
    return (
      <>
        <div className="row contentrow">
          <div className="col-lg-7 col-md-8 "> {this.renderAlbums()}</div>
          <div className="col-lg-4 col-md-4 ">
            <div className="sidecontent">
              <h3>Related posts</h3>
              <p className="divider"></p>
              {this.renderSideContent()}
            </div>
            <div className="categorylist">
              <h5>Categories</h5>
              <p className="divider"></p>

              <div class="siderow">
                <ul className="categoryli">
                  <li>
                    <span>
                      <IconContext.Provider
                        value={{ size: "12px", className: "caticons" }}
                      >
                        <MdSubdirectoryArrowRight />{" "}
                        <NavLink exact to="/">
                          Home
                        </NavLink>
                      </IconContext.Provider>
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <IconContext.Provider
                        value={{ size: "12px", className: "caticons" }}
                      >
                        <MdSubdirectoryArrowRight />{" "}
                        <NavLink exact to="/business">
                          Business
                        </NavLink>
                      </IconContext.Provider>
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span>
                      <IconContext.Provider
                        value={{ size: "12px", className: "caticons" }}
                      >
                        <MdSubdirectoryArrowRight />{" "}
                        <NavLink exact to="/entertainment">
                          Entertainment
                        </NavLink>
                      </IconContext.Provider>
                    </span>
                  </li>
                  <li>
                    <span>
                      <IconContext.Provider
                        value={{ size: "12px", className: "caticons" }}
                      >
                        <MdSubdirectoryArrowRight />{" "}
                        <NavLink exact to="/sports">
                          Sports
                        </NavLink>
                      </IconContext.Provider>
                    </span>
                  </li>
                  <li>
                    <span>
                      <IconContext.Provider
                        value={{ size: "12px", className: "caticons" }}
                      >
                        <MdSubdirectoryArrowRight />{" "}
                        <NavLink exact to="/health">
                          Health
                        </NavLink>
                      </IconContext.Provider>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Display;
