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
          {/* if Link fails to open pdf, use a href */}
          {/* <a href="/assets/E_Macedo_Resume.pdf" target="_blank" rel="noreferrer noopener">Click here to view my resume.</a> */}
            <span className="border border-light" >
              <Link to = "/assets/E_Macedo_Resume.pdf" target="_blank" rel="noreferrer noopener" id="resumeLink">Click here to view my resume</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
