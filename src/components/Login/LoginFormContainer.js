import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import LoginForm from "./LoginForm";
import { userLogin } from "../../store/login/action";
import SignUpHereContainer from "../Home/SignUpHereContainer";

class LoginFormContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.userLogin(this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log("LOGIN?", this.props.login);
    if (this.props.login !== "") {
      return <Redirect to="/myartistlist" />;
    } else {
      return (
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      );
    }
  }
}

const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps, { userLogin })(LoginFormContainer);
