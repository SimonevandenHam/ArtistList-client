import React from "react";

export default class SignUpForm extends React.Component {
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
            value={this.props.value.email}
          ></input>
          <h5>password</h5>
          <input
            onChange={this.props.onChange}
            type="password"
            required="required"
            name="password"
            placeholder="password"
            value={this.props.value.password}
          ></input>
          <input
            onChange={this.props.onChange}
            type="password"
            required="required"
            name="password1"
            placeholder="confirm password"
            value={this.props.value.password1}
          ></input>
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
