import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Resume extends Component {

  // When the component mounts, change the background image
  componentDidMount() {
    document.body.style.backgroundImage = "url('/images/1.png')"; 
    document.body.style.backgroundSize = "cover";
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          {/* <a href="/assets/E_Macedo_Resume.pdf" target="_blank" rel="noreferrer noopener">Click here to view my resume.</a> */}
            <Link to = "/assets/E_Macedo_Resume.pdf" target="_blank" rel="noreferrer noopener">Click here to view my resume.</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
