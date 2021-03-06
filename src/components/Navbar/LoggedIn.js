import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import { userLogout } from "../../store/login/action";
import "../../styles/navbar.css";

class LoggedIn extends Component {
  render() {
    return (
      <AppBar position="static" style={{ width: "100%" }}>
        <Toolbar className="navbar">
          <Button variant="h6" component={Link} to="/">
            ArtistList
          </Button>
          <div className="menuBox">
            <Button color="secondary" component={Link} to="/myartistlist">
              Concert List
            </Button>
            <Button color="secondary" component={Link} to="/addconcert">
              Add Concert
            </Button>
            <Button
              color="secondary"
              component={Link}
              onClick={this.props.userLogout}
              to="/"
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps, { userLogout })(LoggedIn);
