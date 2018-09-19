import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {


      // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
      // const Navbar = props => (
//       <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
//         <Link className="navbar-brand" to="/">
//           Ekaterina Macedo
//     </Link>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
//             <li
//               className={
//                 window.location.pathname === "/about"
//                   ? "nav-item pull-right active"
//                   : "nav-item pull-right"
//               }
//             >
//               <Link to="/about" className="nav-link" onClick={}>
//                 About
//           </Link>
//             </li>
//             <li
//               className={
//                 window.location.pathname === "/portfolio"
//                   ? "nav-item pull-right active"
//                   : "nav-item pull-right"
//               }
//             >
//               <Link to="/portfolio" className="nav-link">
//                 Portfolio
//           </Link>
//             </li>
//             <li
//               className={
//                 window.location.pathname === "/resume"
//                   ? "nav-item pull-right active"
//                   : "nav-item pull-right"
//               }
//             >
//               <Link to="/resume" className="nav-link">
//                 Resume
//           </Link>
//             </li>
//             <li
//               className={
//                 window.location.pathname === "/contact"
//                   ? "nav-item pull-right active"
//                   : "nav-item pull-right"
//               }
//             >
//               <Link to="/contact" className="nav-link" >
//                 Contact
//           </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }
// export default Navbar;

//This code was added to make the Navbar appers when the toggle button is selected. Using Bootstra CSS to avoid adding reactstrap module or Bootstrap jQuery.
//Define a collapse boolean
//check to see if the collapsed component is true
//if true => change the class of navbarNav div
//if collapse if true =>change the class of the button
constructor(props){
  super(props);
  this.toggleNavbar = this.toggleNavbar.bind(this);
  this.state = {collapsed: true};
}

//function to change the state of the collapsed boolean when the collapse button is clicked
toggleNavbar(){
  this.setState({collapsed: !this.state.collapsed});
}

render() {
  const collapsed = this.state.collapsed;
  const classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
  const classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
    <Link className="navbar-brand" to="/">Ekaterina Macedo</Link>
    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className={`${classOne}`} id="navbarNav">
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item ">
          <Link className="nav-link" to="/" onClick={this.toggleNavbar}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={this.toggleNavbar}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link" onClick={this.toggleNavbar}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className="nav-link" onClick={this.toggleNavbar}>Resume</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={this.toggleNavbar}>Contact</Link>
        </li>
      </ul>
    </div>
    </nav>
  );
  } 
}
export default Navbar;