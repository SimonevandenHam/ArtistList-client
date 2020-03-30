import React, { Component } from "react";
import { connect } from "react-redux";

import SignUpForm from "./SignUpFrom";

export class SignUpFormContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = event => {
    this.setState({
      [event.target.email]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createUser({
      email: this.state.email,
      password: this.state.password
    });
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormContainer);
