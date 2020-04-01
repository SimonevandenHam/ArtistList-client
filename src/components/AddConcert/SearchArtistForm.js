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

  //nog niks ingevoerd = please search
  //al een artiest geselecteerd = add more artitsts
  // niks terug? =can not find

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
          {this.props.artistSearchResults.map(artist => {
            let availableImage = null;
            if (artist.picture.length > 0) {
              availableImage = <img src={artist.picture[2].url} />;
            } else {
              availableImage = <img src="/media/artistPlaceholder.png" />;
            }
            console.log("MY ARTIST ARRAY", artist);
            return (
              <ul key={artist.id}>
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
    return this.props.selectedArtist.map(artist => {
      return (
        <ul>
          <p>selected artist: </p>
          <p>{artist.artist}</p>
        </ul>
      );
    });
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
        <p>{this.displaySelectedArtist()}</p>
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
