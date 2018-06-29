import React, { Component } from "react";
import Navbar from "../navbar/navbar.js";
import * as firebase from "firebase";
import { Row, Col } from "antd";
import "./dashboard.css";
class Dashboard extends Component {
  handleLogout(event) {
    event.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("Sign-out successful.");
        this.setState({
          authenticated: false,
          showForm: true,
          notification: true,
          notificationMessage: "Successfully logged out"
        });
      })
      .catch(function(error) {
        // An error happened.
      });
  }
  render() {
    console.log(this.props.userInfo);

    return (
      <div>
        <Navbar isUserAuthenticated={this.props.isAuthenticated} />
        <Row>
          <Col style={{ backgroundColor: "red" }} span={21} push={3}>
            <h3 style={{ color: "black" }}>Welcome User {this.props.userInfo.email}</h3>
          </Col>
          <Col span={3} pull={21}>
            <ul>
              <li>Stats</li>
              <li>Landers</li>
              <li>Generator</li>
              <li>Chat</li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
