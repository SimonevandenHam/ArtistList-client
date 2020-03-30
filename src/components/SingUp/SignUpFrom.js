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
            name="email"
            placeholder="e-mail"
            // value={this.props.values.email}
          ></input>
          <h5>password</h5>
          <input
            onChange={this.props.onChange}
            type="text"
            name="password"
            placeholder="password"
            //value={this.props.values.password}
          ></input>
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
