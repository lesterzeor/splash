import React, { Component } from "react";
import Navbar from "../navbar/navbar.js";
import "../login/login.css";
class Signup extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="login-form">
          <h1 style={{ fontSize: "4em" }}>Contact Us</h1>
          <form action="https://formspree.io/info@espireads.com" method="post" id="contactForm">
            <div className="form-group ">
              <input type="text" name="Name" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group ">
              <input type="email" name="Email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group ">
              <input type="text" name="Company" className="form-control" placeholder="Company" />
            </div>
            {/* <div className="form-group ">
              <select placeholder="Are you?">
                <option value="Advertiser">Advertiser</option>
                <option value="Publisher">Publisher</option>
              </select>
            </div> */}
            <div className="form-group ">
              <input type="text" name="Subject" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group ">
              <textarea type="text" name="Message" className="form-control" placeholder="Message" />
            </div>
            <a href="mailto:info@espireads.com?Subject=Hello%20again" target="_top">
              Email us Info@espireads.com
            </a>

            <button form="contactForm" type="submit" className="log-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
