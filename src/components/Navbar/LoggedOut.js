import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import "../../styles/navbar.css";

class LoggedOut extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar className="navbar">
          <Button variant="h6" component={Link}  to="/" color="bisque">
            ArtistList
          </Button>
          <div className="menuBox">
            <Button color="secondary" component={Link}  to="/signup">
              Sign up
            </Button>
            <Button color="secondary" component={Link} to="/login">
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps)(LoggedOut);
