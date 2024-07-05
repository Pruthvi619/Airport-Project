import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Desktop1 from "./components/Desktop1";
import Desktop2 from "./components/Desktop2";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Desktop1} />
      <Route path="/desktop2" component={Desktop2} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
