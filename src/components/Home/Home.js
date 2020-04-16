import React, { Component } from "react";
import { connect } from "react-redux";

import LoggedOut from "./LoggedOut";
import LoggedIn from "./LoggedIn";

class Home extends Component {
  render() {
    console.log(this.props.login);
    if (this.props.login !== null) {
      return <LoggedIn />;
    } else {
      return <LoggedOut />;
    }
  }
}
const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps)(Home);
