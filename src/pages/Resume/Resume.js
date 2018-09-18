import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Resume.css";

class Resume extends Component {

  // When the component mounts, change the background image
  componentDidMount() {
    document.body.style.backgroundImage = "url('/images/1.png')"; 
    document.body.className = "backgroundImage";
  }

  render() {
    return (
      <div className="container" id="resumeContainer">
        <div className="row">
          <div className="col-md-12">
            <span className="border border-light" >
              <Link to = "/assets/E_Macedo_Resume.pdf" target="_blank" rel="noreferrer noopener" id="resumeLink">Click to display resume</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
