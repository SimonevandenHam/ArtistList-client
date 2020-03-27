import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export default class LoggedInNavbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="home">ArtistList</h3>
        </Link>
        <div className="menuBox">
          <Link to="/myartistlist" style={{ textDecoration: "none" }}>
            <h4 classname="myArtistList">My Artist List</h4>
          </Link>
          <Link to="/addconcert" style={{ textDecoration: "none" }}>
            <h4 classname="addConcert">Add Concert</h4>
          </Link>
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <h4 classname="logout">Logout</h4>
          </Link>
        </div>
      </div>
    );
  }
}
