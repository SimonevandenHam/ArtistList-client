import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userLogout } from "../../store/login/action";
import "../../styles/navbar.css";

class Navbar extends Component {
  render() {
    if (this.props.login !== null) {
      return (
        <div className="navbar">
          <Link to="/">
            <h3 className="home">ArtistList</h3>
          </Link>
          <div className="menuBox">
            <Link to="/myartistlist">
              <h4 className="myArtistList">My Artist List</h4>
            </Link>
            <Link to="/addconcert">
              <h4 className="addConcert">Add Concert</h4>
            </Link>
            <Link onClick={this.props.userLogout} to="/">
              <h4 className="logout">Logout</h4>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <Link to="/">
            <h3 className="home">ArtistList</h3>
          </Link>
          <div className="menuBox">
            <Link to="/signup">
              <h4 className="signUp">Sign up</h4>
            </Link>
            <Link to="/login">
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

export default connect(mapStateToProps, { userLogout })(Navbar);
