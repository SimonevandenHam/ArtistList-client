import React from "react";

export default class AddConcertInfoForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            onChange={this.props.onChange}
            required="required"
            type="date"
            name="startDate"
            placeholder="YYYY-MM-DD"
            value={this.props.values.startDate}
          ></input>
          <input
            onChange={this.props.onChange}
            required="required"
            type="date"
            name="endDate"
            placeholder="YYYY-MM-DD"
            value={this.props.values.endDate}
          ></input>
          <input
            onChange={this.props.onChange}
            type="text"
            required="required"
            name="venue"
            placeholder="Venue"
            value={this.props.values.email}
          ></input>
          <input
            onChange={this.props.onChange}
            type="test"
            required="required"
            name="location"
            placeholder="Location"
            value={this.props.values.password}
          ></input>

          <button type="submit">Add Concert</button>
        </form>
      </div>
    );
  }
}
