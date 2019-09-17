import React, { Component } from "react";
import App from "./App";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Header from "./components/Header";

export class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

export default Main;
