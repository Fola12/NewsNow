import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbars from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Entertainment from "./pages/Entertainment";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import Health from "./pages/Health";
import Display from "./pages/Display";
import Error from "./pages/Error";
function App() {
  return (
    <>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/entertain" component={Entertainment} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/:category/display/:id" component={Display} />
        <Route exact path="/display/:id" component={Display} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
