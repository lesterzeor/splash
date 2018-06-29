import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import * as firebase from "firebase";
import Logo from "../../images/espirelogo.png";
import LogoBlack from "../../images/espirelogo-black.png";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleToggleDrawer = () => this.setState({ open: !this.state.open });

  handleCloseDrawer = () => this.setState({ open: false });
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
    console.log("navigation user authenticated?", this.props.isUserAuthenticated);
    return (
      <div className="navbar-fixed">
        <nav className="blue">
          <div className="container">
            <div className="nav-wrapper">
              <a href="/">
                <img id="logo" src={Logo} className="brand-logo left" alt="website logo" />
              </a>
              <a onClick={this.handleToggleDrawer} data-activates="mobile-menu" className="button-collapse">
                <i className="material-icons">menu</i>
              </a>

              {this.props.isUserAuthenticated ? (
                <ul className="right hide-on-med-and-down">
                  <li>
                    <NavLink exact activeStyle={{ color: "goldenrod" }} onClick={this.handleLogout.bind(this)} to="/login">
                      Log Out
                    </NavLink>
                  </li>
                </ul>
              ) : (
                <ul className="right hide-on-med-and-down">
                  <li>
                    <NavLink exact activeStyle={{ color: "goldenrod" }} to="/signup">
                      Sign Up
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeStyle={{ color: "goldenrod" }} to="/login">
                      Log in
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeStyle={{ color: "goldenrod" }} to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeStyle={{ color: "goldenrod" }} to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              )}

              <MuiThemeProvider>
                {this.props.isUserAuthenticated ? (
                  <Drawer docked={false} width={200} open={this.state.open} onRequestChange={open => this.setState({ open })}>
                    <MenuItem onClick={this.handleClose}>
                      <NavLink exact activeStyle={{ color: "black" }} style={{ color: "black" }} to="/">
                        <img id="logoMobile" src={LogoBlack} alt="website logo" />
                      </NavLink>
                    </MenuItem>

                    <MenuItem onClick={this.handleClose}>
                      <NavLink exact activeStyle={{ color: "black" }} style={{ color: "black" }} to="/about">
                        About Us
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <NavLink exact activeStyle={{ color: "black" }} style={{ color: "black" }} to="/">
                        Contact Us
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <NavLink onClick={this.handleLogout.bind(this)} exact activeStyle={{ color: "black" }} style={{ color: "white" }} to="/signup">
                        Log Out
                      </NavLink>
                    </MenuItem>
                  </Drawer>
                ) : (
                  <Drawer docked={false} width={200} open={this.state.open} onRequestChange={open => this.setState({ open })}>
                    <MenuItem onClick={this.handleClose}>
                      <NavLink exact activeStyle={{ color: "black" }} style={{ color: "black" }} to="/">
                        <img id="logoMobile" src={LogoBlack} alt="website logo" />
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <NavLink exact activeStyle={{ color: "black" }} style={{ color: "black" }} to="/signup">
                        Sign Up
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <NavLink exact activeStyle={{ color: "black" }} style={{ color: "black" }} to="/login">
                        Log In
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <NavLink exact activeStyle={{ color: "black" }} style={{ color: "black" }} to="/about">
                        About Us
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <NavLink exact activeStyle={{ color: "black" }} style={{ color: "black" }} to="/contact">
                        Contact Us
                      </NavLink>
                    </MenuItem>
                  </Drawer>
                )}
              </MuiThemeProvider>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
