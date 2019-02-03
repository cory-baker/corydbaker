import React, { Component } from "react";

import triangle from "../assets/triangle.png";
import mePic from "../assets/mebest.png";
import mamVid from "../assets/mamVid.mp4";
import wkol from "../assets/wkol.MP4";
import nacs from "../assets/nacs-tobacco-kiosk.mov";

import astellas from "../assets/astellas.mov";
import top19 from "../assets/top19.png";

import App from "../App";
class MenuContent extends Component {
  constructor() {
    super();
    this.state = {
      class: "fadeIn",
      information: "",
      opacity: {}
    };
  }

  handleAbout = () => {
    if (this.state.class === "fadeIn") {
      this.setState({
        class: "fadeOut",
        opacity: { opacity: 0 }
      });
    } else {
    }
    this.setState({
      projects: "",
      contact: "",
      about: (
        <div className="textContain">
          <p id="menuP1" className="fadeIn">
            I’m a full stack and mobile developer with an itch for dissecting
            confusing concepts and a knack for writing functional, organized,
            and DRY code. I currently work as a web and app devloper at Gramercy
            Tech, a digital consultancy.
            <br />
            <br />
            Outside of tech, I love spending time with my dog (Sasha), playing
            video games too much, and being outdoors.
          </p>
        </div>
      )
    });
  };

  handleProjects = () => {
    if (this.state.class === "fadeIn") {
      this.setState({
        class: "fadeOut",
        opacity: { opacity: 0 }
      });
    } else {
    }
    this.setState({
      contact: "",
      about: "",
      projects: (
        <div className="textContain fadeIn">
          <h5 id="menuP2" className="fadeIn">
            Master-A-Million
          </h5>
          <p>React Native Mobile App</p>
          <video className="fadeIn" id="mamVid" controls src={mamVid} />
          <br />
          <br />
          <br />
          <h5 id="menuP2" className="fadeIn">
            Astellas Event Survey
          </h5>
          <p>iPad Web App</p>
          <video className="fadeIn" id="mamVid" controls src={astellas} />
          <br />
          <br />
          <br />
          <h5 id="menuP2" className="fadeIn">
            WKOL-AstraZeneca
          </h5>
          <p>React Native Mobile App</p>
          <video className="fadeIn" id="mamVid" controls src={wkol} />
          <br />
          <br />
          <br />
          <h5 id="menuP2" className="fadeIn">
            Reynolds Tobacco Product Showcase
          </h5>
          <p>React Web App</p>
          <video className="fadeIn" id="mamVid" controls src={nacs} />
          <br />
          <br />
          <br />
          <h5 id="menuP2" className="fadeIn">
            Top19
          </h5>
          <p id="menuP4">Top News Storis</p>
          <a target="_blank" href="https://s3.amazonaws.com/top19/index.html">
            <img id="top19" src={top19} />
          </a>
          <br />
          <br />
          <br />
          <p className="fadeIn">and many more...</p>
        </div>
      )
    });
  };

  handleContact = () => {
    if (this.state.class === "fadeIn") {
      this.setState({
        class: "fadeOut",
        opacity: { opacity: 0 }
      });
    } else {
    }
    this.setState({
      about: "",
      projects: "",
      contact: (
        <div className="textContain fadeIn">
          <a id="menuP3">douglasb2008@gmail.com</a>
          <br />
          <br />

          <a
            target="_blank"
            id="menuP3"
            href="https://stackoverflow.com/users/9094578/cory-baker"
          >
            Stackoverflow
          </a>
          <br />
          <br />
          <a target="_blank" id="menuP3" href="https://medium.com/@coryb08">
            Medium
          </a>
          <br />
          <br />
          <a
            target="_blank"
            id="menuP3"
            href="https://www.facebook.com/corydbaker"
          >
            Facebook
          </a>
        </div>
      )
    });
  };

  render() {
    return (
      <div id="MenuContent">
        <div className="menuDiv">
          <img
            style={this.state.opacity}
            src={mePic}
            className={this.state.class}
            id="mePic"
          />
          <h3>
            <span onClick={this.handleAbout}>ABOUT</span>
          </h3>
          {this.state.about}
          <br />
          <h3>
            <span onClick={this.handleProjects}>PROJECTS</span>
          </h3>
          {this.state.projects}
          <br />
          <h3>
            <span onClick={this.handleContact}>LINKS</span>
          </h3>
          {this.state.contact}
        </div>
      </div>
    );
  }
}
export default MenuContent;
