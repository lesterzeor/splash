import React, { Component } from "react";
import Navbar from "../navbar/navbar.js";
import "./about.css";
class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="bodyClass">
          <div className="bodyContainer">
            <h1>
              ABOUT US
              <br />
              <img alt="" src="https://image.ibb.co/nk616F/Layer_1_copy_21.png" width={47} height={11} align="center" />
            </h1>
            <article>
              <p>
                As an influence marketer, you want the freedom to select from top-converting CPI offers, the simplicity of an easy-to-use and reliable tracking platform, and a relationship that will
                help you grow your bottom line.
              </p>
              <p>
                As a performance influencer company, we've made it our priority to answer your needs: We bring in top, exclusive offers from direct advertisers worldwide, have a flexible proprietary
                performance tracking platform, and provide you with access to professionals with the expertise you need to stay ahead.
              </p>
            </article>
            <div className="social_icons">
              <div className="square">
                <div className="icons">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </div>
              </div>
              <div className="square">
                <div className="icons">
                  <i className="fa fa-youtube" aria-hidden="true" />
                </div>
              </div>
              <div className="square">
                <div className="icons">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </div>
              </div>
              <div className="square">
                <div className="icons">
                  <i className="fa fa-dribbble" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="detailsDiv">
              <div className="detailItem">
                <i className="fa fa-laptop fa-3x detailItemIcon" aria-hidden="true" />
                <h6>EASY TO USE</h6>
                <p>Our proprietary platform gives you the tools to manage your campaigns independently and most effectively.</p>
              </div>
              <div className="detailItem">
                <i className="fa fa-users fa-3x detailItemIcon" aria-hidden="true" />

                <h6>CAMPAIGNS</h6>
                <p>Our performance marketplace has hundreds of mobile CPI offers to maximize your ROI.</p>
              </div>
              <div className="detailItem">
                <i className="fa fa-user fa-3x detailItemIcon" aria-hidden="true" />

                <h6>ACCOUNT MANAGER</h6>
                <p>Our performance experts will work with you providing ongoing consultation and guidance.</p>
              </div>
              <div className="detailItem">
                <div>
                  <i className="fa fa-line-chart fa-3x detailItemIcon" aria-hidden="true" />

                  <h6>TOP PERFORMING</h6>
                  <p>Maximize your revenue with Espire's CPI Network</p>
                </div>
              </div>
              <div className="detailItem">
                <div>
                  <i className="fa fa-retweet fa-3x detailItemIcon" aria-hidden="true" />

                  <h6>REFERRAL PROGRAM</h6>
                  <p>We value a good word from our affiliates and will reward you with a percentage of your referred affiliates’ commissions!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
