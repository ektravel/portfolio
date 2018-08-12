import React, { Component } from "react";

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
           This is the Resume page.
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;