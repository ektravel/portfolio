import React, { Component } from "react";
import "./Home.css";

class Home extends Component {

  // When the component mounts, update the background image
  componentDidMount() {
    document.body.style.backgroundImage = "url('/images/3.png')";
    document.body.style.backgroundSize = "cover";
  }

  render() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-12" id="homeContainer">
            This is the Home page.
            </div>
        </div>
    </div>
    );
  }
}

export default Home;
