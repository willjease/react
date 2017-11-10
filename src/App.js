import React, { Component } from 'react';
import AppNav from './components/AppNav';
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './css/App.css';

const currentUser = localStorage.getItem("username");
class App extends Component {
  render() {
    const LoginRoute = ({component: Component, ...rest}) => {
      if (currentUser) {
        return <Redirect to="/"/>
      } else {
        return <Route {...rest} component={Component}/>
      }
    }
    return (
      <BrowserRouter>
        <div>
          <AppNav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
