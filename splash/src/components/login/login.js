import React, { Component } from "react";
import Navbar from "../navbar/navbar.js";
import "../login/login.css";
import * as firebase from "firebase";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUserInfo: "",
      loggedIn: false,
      authenticated: false,
      errorMessage: "",
      email: "",
      password: ""
    };
  }
  handler(user) {
    this.setState({
      useremail: user.email,
      loggedin: true
    });
  }
  EmailInput(event) {
    console.log(event.target.value);
    this.setState({
      email: event.target.value
    });
  }
  PasswordInput(event) {
    this.setState({
      password: event.target.value
    });
  }
  handleRegister(event) {
    this.setState({
      errorMessage: ""
    });
    event.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    // let loggedin = this.props.action;
    if (email === "" && password === "") {
      this.setState({
        errorMessage: "Please Check Credentials"
      });
    }
    var self = this;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error code : ", errorCode, " With message:", errorMessage);
        self.setState({
          errorMessage: errorMessage
        });
      })
      .then(function(user) {
        // self.props.updateAuthentication;
        self.props.onGetUserInfo(user);
      });
  }
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
    return (
      <div>
        <Navbar />
        <div className="login-form">
          <h1>Log In</h1>
          <div className="form-group ">
            <input value={this.state.email} onChange={this.EmailInput.bind(this)} type="email" className="form-control" placeholder="Email " id="UserName" />
          </div>
          <div className="form-group log-status">
            <input value={this.state.password} onChange={this.PasswordInput.bind(this)} type="password" className="form-control" placeholder="Password" id="Passwod" />
          </div>
          <Link style={{ marginBottom: "10px !important" }} to="/signup">
            Need an account?
          </Link>
          <span className="alert">{this.state.errorMessage}</span>
          <button onClick={this.handleRegister.bind(this)} type="button" className="log-btn">
            Log In
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
