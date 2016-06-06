import React, { PropTypes } from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";
import { Home, About } from './components/pages';
import { Main } from './components/layout/';

require("../styles/site");

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Main/>
      </div>
    );
  }
}

const routes = {
  path: "/",
  component: Main,
  indexRoute: { component: Home },
  childRoutes: [
    { path: "home", component: Home },
    { path: "about", component: About}
  ]
};

render(<Router routes={routes} />, document.getElementById("container"));
