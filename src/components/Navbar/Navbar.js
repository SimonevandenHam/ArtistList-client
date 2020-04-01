import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

class Navbar extends Component {
  render() {
    if (this.props.login !== null) {
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
    } else {
      return (
        <div className="navbar">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="home">ArtistList</h3>
          </Link>
          <div className="menuBox">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <h4 className="signUp">Sign up</h4>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <h4 className="login">Login</h4>
            </Link>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps)(Navbar);
