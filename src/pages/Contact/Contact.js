import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {

  // When the component mounts, update the background image
  componentDidMount() {
    document.body.style.backgroundImage = "url('/images/5.png')";
    document.body.style.backgroundSize = "cover";
  }

  render() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-12" id="homeContainer">
            This is the Contact page.
            </div>
        </div>
    </div>
    );
  }
}

export default Contact;
