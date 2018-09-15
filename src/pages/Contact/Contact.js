import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {

  // When the component mounts, update the background image
  componentDidMount() {
    document.body.style.backgroundImage = "url('/images/5.png')";
    document.body.className = "backgroundImage";
  }

  render() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
            
            <div className="card">
                <h4 className="card-header bg-transparent text-center" id="contactHeader">Let's connect!</h4>
                <div className="card-body bg-transparent">
                    <form method="POST" action="https://formspree.io/kmpromoatx@gmail.com">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input name="name" className="form-control" type="text" placeholder="Your name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input name="email" className="form-control" type="text" placeholder="Your email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="notes">Message</label>
                            <textarea name="message" className="form-control" rows="3" type="text" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>


            </div>
        </div>
    </div>
    );
  }
}

export default Contact;
