import React from "react";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";

import { addConcert, clearSelectedArtist } from "../../store/addConcert/action";
import "../../styles/addConcert.css";

class AddConcertFormContainer extends React.Component {
  state = {
    date: "",
    endDate: "",
    venue: "",
    location: "",
  };

  onSubmit = (event) => {
    event.preventDefault();

    const concertInformation = {
      concert: this.state,
      artist: this.props.selectedArtist,
    };
    this.props.addConcert(concertInformation, this.props.login);
    this.setState({
      date: "",
      endDate: "",
      venue: "",
      location: "",
    });
    this.props.clearSelectedArtist();
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="inputField">
            <TextField
              required
              onChange={this.onChange}
              label="start date"
              format="yyyy/MM/dd"
              type="date"
              name="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.date}
            />
          </div>
          <div className="inputField">
            <TextField
              required
              onChange={this.onChange}
              label="end date"
              type="date"
              name="endDate"
              format="yyyy/MM/dd"
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.endDate}
            />
          </div>
          <div className="inputField">
            <TextField
              required
              onChange={this.onChange}
              label="Venue"
              type="text"
              name="venue"
              placeholder="Venue"
              value={this.state.email}
            ></TextField>
          </div>
          <div className="inputField">
            <TextField
              required
              onChange={this.onChange}
              label="Location"
              type="test"
              name="location"
              placeholder="Location"
              value={this.state.password}
            ></TextField>
          </div>
          <Button type="submit" variant="contained" color="primary">
            Add Concert
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedArtist: state.artistSearchResults.selectedArtist,
  login: state.login,
});

export default connect(mapStateToProps, { addConcert, clearSelectedArtist })(
  AddConcertFormContainer
);
