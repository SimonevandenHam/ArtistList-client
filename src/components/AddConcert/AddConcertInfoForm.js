import React from "react";
import { connect } from "react-redux";

import { addConcert, clearSelectedArtist } from "../../store/addConcert/action";

class AddConcertFormContainer extends React.Component {
  state = {
    date: "",
    endDate: "",
    venue: "",
    location: ""
  };

  onSubmit = event => {
    event.preventDefault();

    const concertInformation = {
      concert: this.state,
      artist: this.props.selectedArtist
    };
    this.props.addConcert(concertInformation, this.props.login);
    this.setState({
      date: "",
      endDate: "",
      venue: "",
      location: ""
    });
    this.props.clearSelectedArtist();
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
            name="date"
            placeholder="YYYY-MM-DD"
            value={this.state.date}
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

const mapStateToProps = state => ({
  selectedArtist: state.artistSearchResults.selectedArtist,
  login: state.login
});

export default connect(mapStateToProps, { addConcert, clearSelectedArtist })(
  AddConcertFormContainer
);
