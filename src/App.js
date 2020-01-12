import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import MainPage from "./components/MainPage";
import Occasion from "./Occasion";
import LoginSignup from "./components/LoginSignup";

const history = createHistory();

export class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={["/", "/index.html"]} exact component={MainPage} />
          <Route path="/occasion/:id" component={Occasion} />
          <Route path={["/loginSignup"]} component={LoginSignup} />
        </Switch>
      </Router>
    );
  }
}

export default App;
