import React from "react";
import { connect } from "react-redux";

import {
  searchArtistResult,
  selectArtist,
  clearSearchArtist
} from "../../store/addConcert/action";

class SearchArtistForm extends React.Component {
  state = {
    artist: null
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.searchArtistResult(this.state.artist);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  displayArtistSearchResult = () => {
    if (this.props.artistSearchResults === null) {
      return "please enter a artist";
    } else if (this.props.artistSearchResults.length === 0) {
      return "can not find this artist";
    } else {
      return (
        <div>
          {this.props.artistSearchResults.map(artist => {
            let availableImage = null;
            if (artist.images.length > 0) {
              availableImage = <img src={artist.images[2].url} />;
            } else {
              availableImage = <img src="/media/artistPlaceholder.png" />;
            }
            console.log(artist);
            return (
              <li key={artist.id}>
                <p>{availableImage}</p>
                <p>{artist.name}</p>
                <button
                  type="button"
                  onClick={() => {
                    this.saveArtistToStore(artist);
                  }}
                >
                  add artist
                </button>
              </li>
            );
          })}
        </div>
      );
    }
  };

  saveArtistToStore = artist => {
    this.props.selectArtist(artist);
    this.props.clearSearchArtist();
    this.setState({ artist: "" });
  };

  render() {
    console.log(this.props.selectedArtist);
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
        {this.displayArtistSearchResult()}
      </div>
    );
  }
}

//get information from the store
const mapStateToProps = state => ({
  artistSearchResults: state.artistSearchResults.artistSearchResult,
  selectedArtist: state.artistSearchResults.selectedArtist
});

export default connect(mapStateToProps, {
  searchArtistResult,
  selectArtist,
  clearSearchArtist
})(SearchArtistForm);
