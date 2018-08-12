import React, { Component } from "react";

class Portfolio extends Component {

  // When the component mounts, change the background image
  componentDidMount() {
    document.body.style.backgroundImage = "url('/images/6.png')";
    document.body.style.backgroundSize = "cover";
  }

  render() {
    return (
      <div className="container">
      <div className="row">
          <div className="col-md-12">
              This is the Portfolio page.
          </div>
      </div>
  </div>
    );
  }
}

export default Portfolio;