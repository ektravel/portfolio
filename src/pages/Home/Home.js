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
        <div className="row align-items-center" id="homeRow">
            <div className="col-md-12 justify-content-center" id="homeDiv" >
            <p className="homeP">Web Developer</p>
            <h1 id="homeTitle">Ekaterina Macedo</h1>
            <p className="homeP">Let's build something together.</p>
            </div>
        </div>
    </div>
    );
  }
}

export default Home;
