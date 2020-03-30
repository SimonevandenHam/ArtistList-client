import React, { Component } from "react";
import { connect } from "react-redux";

import SignUpForm from "./SignUpFrom";
import { createUser } from "../../store/signUp/action";

export class SignUpFormContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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
        value={this.state}
      />
    );
  }
}

export default connect(null, { createUser })(SignUpFormContainer);
