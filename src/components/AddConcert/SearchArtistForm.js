import React from "react";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";

import {
  searchArtistResult,
  selectArtist,
  clearSearchArtist,
  updateSelectedArtistArray,
} from "../../store/addConcert/action";
import "../../styles/addConcert.css";

class SearchArtistForm extends React.Component {
  state = {
    artist: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.searchArtistResult(this.state.artist);
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  displayArtistSearchResult = () => {
    if (
      this.props.artistSearchResults === null &&
      this.props.selectedArtist.length === 0
    ) {
      return <h6>please search an artist</h6>;
    } else if (
      this.props.artistSearchResults !== null &&
      this.props.artistSearchResults.length === 0
    ) {
      return <h6>can not find this artist</h6>;
    } else if (
      this.props.selectedArtist.length > 0 &&
      this.props.artistSearchResults === null
    ) {
      return <h6>you can add more artists</h6>;
    } else {
      return (
        <div className="displaySearchResult">
          {this.props.artistSearchResults.map((artist, index) => {
            let availableImage = null;

            if (artist.picture.length > 0) {
              availableImage = (
                <img
                  className="artistImage"
                  src={artist.picture[2].url}
                  alt="artist"
                />
              );
            } else {
              availableImage = (
                <img
                  src="/assets/images/artistPlaceholder.png"
                  alt="placeholder artist"
                  className="artistImage"
                />
              );
            }
            return (
              <div key={index} className="artistImageBox">
                <p>{availableImage}</p>
                <p>{artist.artist}</p>
                <Button
                  type="button"
                  onClick={() => {
                    this.saveArtistToStore(artist);
                  }}
                >
                  <AddIcon />
                </Button>
              </div>
            );
          })}
        </div>
      );
    }
  };

  saveArtistToStore = (artist) => {
    artist.artistPicture =
      artist.picture.length > 0
        ? artist.picture[2].url
        : "/media/artistPlaceholder.png";
    this.props.selectArtist(artist);
    this.props.clearSearchArtist();
    this.setState({ artist: "" });
  };

  displaySelectedArtist = () => {
    return this.props.selectedArtist.map((artist, index) => {
      console.log(artist);
      return (
        <ul key="index">
          <div className="displayArtistSearchResult">
            <p>{artist.artist}</p>
            <Button
              style={{ minWidth: 20 }}
              aria-label="delete"
              type="button"
              onClick={() => {
                this.deleteArtist(artist);
              }}
            >
              <DeleteIcon fontSize="small" />
            </Button>
          </div>
        </ul>
      );
    });
  };

  deleteArtist = (artist) => {
    let newArtistArray = this.props.selectedArtist.filter(function (a) {
      return a.spotifyArtistId !== artist.spotifyArtistId;
    });
    this.props.updateSelectedArtistArray(newArtistArray);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextField
            className="searchField"
            onChange={this.onChange}
            type="text"
            required="required"
            name="artist"
            placeholder="Artist"
            value={this.state.artist}
          ></TextField>

          <Button type="submit" style={{ padding: 0, minWidth: 30 }}>
            <SearchIcon style={{ padding: 0 }} />
          </Button>
        </form>
        <div>{this.displayArtistSearchResult()}</div>

        {this.props.selectedArtist.length > 0 ? (
          <h5>selected artists : </h5>
        ) : null}
        {this.displaySelectedArtist()}
      </div>
    );
  }
}

//get information from the store
const mapStateToProps = (state) => ({
  artistSearchResults: state.artistSearchResults.artistSearchResult,
  selectedArtist: state.artistSearchResults.selectedArtist,
});

export default connect(mapStateToProps, {
  searchArtistResult,
  selectArtist,
  clearSearchArtist,
  updateSelectedArtistArray,
})(SearchArtistForm);
