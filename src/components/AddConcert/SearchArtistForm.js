import React from "react";
import { connect } from "react-redux";

import {
  searchArtistResult,
  selectArtist,
  clearSearchArtist
} from "../../store/addConcert/action";

class SearchArtistForm extends React.Component {
  state = {
    artist: ""
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
    if (
      this.props.artistSearchResults === null &&
      this.props.selectedArtist.length === 0
    ) {
      return "please search an artist";
    } else if (
      this.props.artistSearchResults !== null &&
      this.props.artistSearchResults.length === 0
    ) {
      return "can not find this artist";
    } else if (
      this.props.selectedArtist.length > 0 &&
      this.props.artistSearchResults === null
    ) {
      return "you can add more artists";
    } else {
      return (
        <div>
          {this.props.artistSearchResults.map((artist, index) => {
            let availableImage = null;
            if (artist.picture.length > 0) {
              availableImage = <img src={artist.picture[2].url} alt="artist" />;
            } else {
              availableImage = (
                <img
                  src="/media/artistPlaceholder.png"
                  alt="placeholder artist"
                />
              );
            }
            return (
              <ul key={index}>
                <p>{availableImage}</p>
                <p>{artist.artist}</p>
                <button
                  type="button"
                  onClick={() => {
                    this.saveArtistToStore(artist);
                  }}
                >
                  add artist
                </button>
              </ul>
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

  displaySelectedArtist = () => {
    return this.props.selectedArtist.map((artist, index) => {
      return (
        <ul key="index">
          <p>{artist.artist}</p>

          <button
            type="button"
            onClick={() => {
              this.deleteArtist(artist);
            }}
          >
            delete artist
          </button>
        </ul>
      );
    });
  };

  deleteArtist = artist => {
    let newArtistArray = this.props.selectedArtist.filter(function(a) {
      return a.spotifyArtistId !== artist.spotifyArtistId;
    });
    console.log(newArtistArray);
  };

  render() {
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
        <div>{this.displayArtistSearchResult()}</div>
        {this.props.selectedArtist.length > 0 ? "selected artists" : null}
        {this.displaySelectedArtist()}
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
