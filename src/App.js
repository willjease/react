import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ConNav from "./containers/ConNav";
import ConLogin from "./containers/ConLogin";
import ConSignup from "./containers/ConSignup";
import Home from "./pages/Home";
import User from "./pages/User";
import Manage from "./pages/Manage";
import "whatwg-fetch";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <ConNav />
          <Switch>
            <Route path="/signup" component={ConSignup}/>
            <Route path="/Manage" component={Manage}/>
            <Route path="/login" component={ConLogin}/>
            <Route path="/user" component={User}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
