import React from "react";

import { TextField, Button } from "@material-ui/core";
import "../../styles/home.css";

export default class SignUpForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="signUpHereContainer">
          <h4>
            Sign up to start keeping track <br />
            of all the artist you've seen live
          </h4>
          <form onSubmit={this.props.onSubmit}>
            <TextField
              id="standard-basic"
              onChange={this.props.onChange}
              type="text"
              required="required"
              name="email"
              placeholder="e-mail"
              value={this.props.value.email}
            />
            <br />
            <br />

            <TextField
              onChange={this.props.onChange}
              type="password"
              required="required"
              name="password"
              placeholder="password"
              value={this.props.value.password}
            />
            <br />
            <br />
            <TextField
              onChange={this.props.onChange}
              type="password"
              required="required"
              name="password1"
              placeholder="confirm password"
              value={this.props.value.password1}
            />
            <br />
            <br />
            <Button variant="contained" color="primary" type="submit">
              Sign Up
            </Button>
          </form>
        </div>{" "}
      </div>
    );
  }
}
