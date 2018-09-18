import React, { Component } from "react";
import "./About.css";

class About extends Component {

  // When the component mounts, change the background image
  componentDidMount() { 
    document.body.style.backgroundImage = "url('/images/2.png')";
    document.body.className = "backgroundImage";
  }

  render() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 justify-content-center" id="aboutDiv" >
                <h1 id="aboutTitle">Hi! I am Ekaterina.</h1>
                <p id="aboutP">
                I am a junior web developer (full-stack!) with an extensive background in supply chain management, procurement, and CPG. A graduate of The Web Development Coding Boot Camp at UT Austin, I have experience working with various technologies such as HTML/CSS, Bootstrap, JavaScript, jQuery, Github, APIs, Node.js and Express, MySQL, MongoDB, and React.js. I love learning, enjoy teamwork and creative challenges, and thrive in a fast-paced work environment.
                <br/>
                Let's build something together!
                </p>
                 </div>
            </div>
        </div>
    );
  }
}

export default About;