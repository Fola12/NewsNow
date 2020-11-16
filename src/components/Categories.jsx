import React, { Component } from "react";
import CategorieCards from "./CategorieCards";
import { Link } from "react-router-dom";

class HomeCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      entertain: [],
      health: [],
      sports: []
    };
  }

  componentDidMount() {
    this.fetchBusData();
    this.fetchSportData();
    this.fetchEnterData();
    this.fetchHealthData();
  }

  fetchBusData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=506ad282055e4ae5a1828130d3d902c3"
    )
      .then(results => results.json())
      .then(data => {
        const busdata = data.articles;
        this.setState({ business: busdata });
      });
  };

  fetchEnterData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=506ad282055e4ae5a1828130d3d902c3"
    )
      .then(results => results.json())
      .then(data => {
        const busdata = data.articles;
        this.setState({ entertain: busdata });
      });
  };

  fetchHealthData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=506ad282055e4ae5a1828130d3d902c3"
    )
      .then(results => results.json())
      .then(data => {
        const busdata = data.articles;
        this.setState({ health: busdata });
      });
  };

  fetchSportData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=506ad282055e4ae5a1828130d3d902c3"
    )
      .then(results => results.json())
      .then(data => {
        const busdata = data.articles;
        this.setState({ sports: busdata });
      });
  };

  renderBusiness() {
    return this.state.business.slice(1, 2).map((data, i) => {
      return (
        <CategorieCards
          key={i + "category"}
          id={i + "category"}
          src={data.urlToImage}
          title={data.title}
          category="Business"
        />
      );
    });
  }
  renderEntertain() {
    return this.state.entertain.slice(1, 2).map((data, i) => {
      return (
        <CategorieCards
          key={i + "category"}
          id={i + "category"}
          src={data.urlToImage}
          title={data.title}
          category="Entertainment"
        />
      );
    });
  }

  renderSports() {
    return this.state.sports.slice(1, 2).map((data, i) => {
      return (
        <CategorieCards
          key={i + "category"}
          id={i + "category"}
          src={data.urlToImage}
          title={data.title}
          category="Sports"
        />
      );
    });
  }
  renderHealth() {
    return this.state.health.slice(3, 4).map((data, i) => {
      return (
        <CategorieCards
          key={i + "category"}
          id={i + "category"}
          src={data.urlToImage}
          title={data.title}
          category="Health"
        />
      );
    });
  }
  render() {
    return (
      <div className="row ">
        <div className="col-md-12 cathead" style={{ zIndex: -1 }}>
          <h4>NEWS CATEGORIES</h4>
          <p className="divider" />
        </div>
        <div className=" col-sm-6 col-md-6 col-lg-3 catCard buss">
          <Link to="/business"> {this.renderBusiness()}</Link>
        </div>
        <div className=" col-sm-6 col-md-6 col-lg-3 catCard entertain">
          <Link to="/entertain"> {this.renderEntertain()}</Link>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 catCard sports">
          <Link to="/sport"> {this.renderSports()}</Link>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 catCard health">
          <Link to="/health"> {this.renderHealth()}</Link>
        </div>
      </div>
    );
  }
}

export default HomeCategories;
