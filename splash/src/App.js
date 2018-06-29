import React, { Component } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./components/home/home.js";
import Dashboard from "./components/dashboard/dashboard.js";
import Login from "./components/login/login.js";
import Signup from "./components/signup/signup.js";
// import Navbar from "./components/navbar/navbar.js";
import Contact from "./components/contact/contact.js";
import About from "./components/about/about.js";
import * as firebase from "firebase";
import "./components/login/index.js";
import "./App.css";
var config = {
  apiKey: "AIzaSyCgwanMsYM0daxFZYMLSzwc-wM40LUOGCI",
  authDomain: "espire-1e8c0.firebaseapp.com",
  databaseURL: "https://espire-1e8c0.firebaseio.com",
  projectId: "espire-1e8c0",
  storageBucket: "espire-1e8c0.appspot.com",
  messagingSenderId: "59458669043"
};
firebase.initializeApp(config);

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: "",
      loggedIn: false,
      loaded: false,
      authenticated: false,
      currentYear: ""
    };
  }
  componentDidMount() {
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    this.setState({
      currentYear: year
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loading: false, authenticated: true, useremail: user.email });
      } else {
        this.setState({ loading: false, authenticated: false });
      }
    });
  }
  updateAuthentication(user) {
    console.log("Logged in with user", user);
    this.setState({
      authenticated: true
    });
  }
  handleUserInfo = userinfo => {
    console.log("thanks for the user", userinfo);
    this.setState({ userinfo: userinfo });
  };

  handleLogout(event) {
    event.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("Sign-out successful.");
        this.setState({
          authenticated: false
        });
      })
      .catch(function(error) {
        // An error happened.
      });
  }
  render() {
    console.log("user has been authenticated", this.state.authenticated);
    console.log("user info", this.state.userinfo);
    return (
      <div>
        <Router>
          <div>
            <Route path={"/"} exact render={() => (this.state.authenticated ? <Dashboard userInfo={this.state.userinfo} isAuthenticated={this.state.authenticated} /> : <Home />)} />
            <Route path={"/about"} exact component={About} />
            <Route path={"/contact"} exact component={Contact} />
            <Route
              path={"/signup"}
              exact
              strict
              render={() => (this.state.authenticated ? <Redirect to="/dashboard" /> : <Signup onGetUserInfo={this.handleUserInfo.bind(this)} action={this.updateAuthentication.bind(this)} />)}
            />
            <Route
              path={"/login"}
              exact
              strict
              render={() => (this.state.authenticated ? <Redirect to="/dashboard" /> : <Login onGetUserInfo={this.handleUserInfo.bind(this)} action={this.updateAuthentication.bind(this)} />)}
            />
            {/* <Route path={"/user/:username"} exact component={User} /> */}
            {this.state.authenticated ? (
              <Route path={"/dashboard"} exact render={() => <Dashboard userInfo={this.state.userinfo} isAuthenticated={this.state.authenticated} />} />
            ) : (
              <Route path={"/dashboard"} exact render={() => <Home />} />
            )}
          </div>
        </Router>
        <p className="signature">{`All Rights Reserved © ${this.state.currentYear} Espire`}</p>
      </div>
    );
  }
}

export default App;
