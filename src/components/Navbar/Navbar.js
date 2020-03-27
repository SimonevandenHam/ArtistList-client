import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="home">ArtistList</h3>
        </Link>
        <div className="menuBox">
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <h4 classname="signUp">Sign up</h4>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <h4 classname="login">Login</h4>
          </Link>
        </div>
      </div>
    );
  }
}
