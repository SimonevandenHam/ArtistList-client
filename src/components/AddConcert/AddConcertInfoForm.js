import React from "react";
import { connect } from "react-redux";

class AddConcertFormContainer extends React.Component {
  state = {
    startDate: "",
    endDate: "",
    venue: "",
    location: ""
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h5>starte date</h5>
          <input
            onChange={this.onChange}
            required="required"
            type="date"
            name="startDate"
            placeholder="YYYY-MM-DD"
            value={this.state.startDate}
          ></input>
          <h5>end date</h5>
          <input
            onChange={this.onChange}
            type="date"
            name="endDate"
            placeholder="YYYY-MM-DD"
            value={this.state.endDate}
          ></input>
          <h5>venue</h5>
          <input
            onChange={this.onChange}
            type="text"
            required="required"
            name="venue"
            placeholder="Venue"
            value={this.state.email}
          ></input>
          <h5>location</h5>
          <input
            onChange={this.onChange}
            type="test"
            required="required"
            name="location"
            placeholder="Location"
            value={this.state.password}
          ></input>

          <button type="submit">Add Concert</button>
        </form>
      </div>
    );
  }
}

export default connect(null)(AddConcertFormContainer);
