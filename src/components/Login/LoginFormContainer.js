import React from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { userLogin } from "../../store/login/action";

class LoginFormContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.userLogin(this.state.email, this.state.password);
  };

  onChange = event => {
    console.log(this.state);
    this.setState({
      [event.target.email]: event.target.value
    });
  };

  render() {
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { userLogin })(LoginFormContainer);
