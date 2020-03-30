import React from "react";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <h5>e-mail:</h5>
          <input
            onChange={this.props.onChange}
            type="text"
            required="required"
            name="email"
            placeholder="e-mail"
            value={this.props.values.email}
          ></input>
          <h5>password</h5>
          <input
            onChange={this.props.onChange}
            type="password"
            required="required"
            name="password"
            placeholder="password"
            value={this.props.values.password}
          ></input>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
