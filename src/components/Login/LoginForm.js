import React from "react";

import { TextField, Button } from "@material-ui/core";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <h4>please login to add concerts to your list</h4>
        <form onSubmit={this.props.onSubmit}>
          <TextField
            id="standard-basic"
            onChange={this.props.onChange}
            type="text"
            required="required"
            name="email"
            placeholder="e-mail"
            value={this.props.values.email}
          />
          <br />
          <br />
          <TextField
            onChange={this.props.onChange}
            type="password"
            required="required"
            name="password"
            placeholder="password"
            value={this.props.values.password}
          />
          <br />
          <br />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
