import React from "react";
import Quiz from "./Quiz";
import Header from "./Header";
import IsTriangle from "./IsTriangle";
import Hypotenuse from "./Hypotenus";
import Area from "./Area";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Quiz} />
        <Route exact path="/is-triangle" component={IsTriangle} />
        <Route exact path="/hypotenuse" component={Hypotenuse} />
        <Route exact path="/area-of-triangle" component={Area} />
      </Switch>
    </Router>
  );
}
