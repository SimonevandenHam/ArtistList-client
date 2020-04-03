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
  updateSelectedArtistArray
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          {this.props.artistSearchResults.map((artist, index) => {
            let availableImage = null;
            const imgStyle = { width: 75, height: 75 };
            if (artist.picture.length > 0) {
              availableImage = (
                <img
                  src={artist.picture[2].url}
                  alt="artist"
                  style={imgStyle}
                />
              );
            } else {
              availableImage = (
                <img
                  src="/media/artistPlaceholder.png"
                  alt="placeholder artist"
                  style={imgStyle}
                />
              );
            }
            return (
              <div
                key={index}
                style={{
                  width: 75,
                  marginLeft: 10,
                  marginRight: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column"
                }}
              >
                <p>{availableImage}</p>
                <p style={{ fontSize: 12 }}>{artist.artist}</p>
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
          <Button
            aria-label="delete"
            type="button"
            onClick={() => {
              this.deleteArtist(artist);
            }}
          >
            <DeleteIcon fontSize="medium" />
          </Button>
        </ul>
      );
    });
  };

  deleteArtist = artist => {
    let newArtistArray = this.props.selectedArtist.filter(function(a) {
      return a.spotifyArtistId !== artist.spotifyArtistId;
    });
    this.props.updateSelectedArtistArray(newArtistArray);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextField
            onChange={this.onChange}
            type="text"
            required="required"
            name="artist"
            placeholder="Artist"
            style={{ width: "110px" }}
            value={this.state.artist}
          ></TextField>

          <Button type="submit">
            <SearchIcon />
          </Button>
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
  clearSearchArtist,
  updateSelectedArtistArray
})(SearchArtistForm);
