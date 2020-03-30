import React, { Component } from "react";
import { connect } from "react-redux";

import SignUpForm from "./SignUpFrom";
import { createUser } from "../../store/signUp/action";
import "../../styles/home.css";

export class SignUpFormContainer extends Component {
  state = {
    email: "",
    password: "",
    password1: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.password === this.state.password1) {
      this.props.createUser({
        email: this.state.email,
        password: this.state.password
      });
      this.setState({
        email: "",
        password: "",
        password1: ""
      });
    } else {
      this.setState({
        error: "passwords not equal, please enter your password again"
      });
    }
  };

  render() {
    console.log("LOGIN", this.props);
    const errorMessage = this.state.error ? this.state.error : null;
    return (
      <div className="container">
        <div className="signUpHereContainer">
          <SignUpForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            value={this.state}
          />{" "}
          <div className="errorMessage">{errorMessage}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: props.login
});

export default connect(mapStateToProps, { createUser })(SignUpFormContainer);
