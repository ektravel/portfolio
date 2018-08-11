import React, { Component } from "react";
import "./About.css";

class About extends Component {

  // When the component mounts, change the background image
  componentDidMount() { 
    document.body.style.backgroundImage = "url('/images/2.png')";
    document.body.style.backgroundSize = "cover";
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    This is the About page.
                </div>
            </div>
        </div>
    );
  }
}

export default About;