import React from "react";
import { connect } from "react-redux";

import { searchArtistResult } from "../../store/addConcert/action";

class SearchArtistForm extends React.Component {
  state = {
    artist: null
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("ARTIST STATE", this.state);
    this.props.searchArtistResult(this.state.artist);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log("props artist", this.searchResult);
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type="text"
            required="required"
            name="artist"
            placeholder="Artist"
            value={this.state.artist}
          ></input>

          <button type="submit">search for artist</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { searchArtistResult })(SearchArtistForm);
