import React, { Component } from "react";
import { connect } from "react-redux";
import { Paper, Button, useMediaQuery } from "@material-ui/core";

import { getAllUserConcerts } from "../../store/artistList/action";
import "../../styles/artistList.css";

export class ArtistListContainer extends Component {
  componentDidMount() {
    this.props.getAllUserConcerts(this.props.login);
  }

  showConcerts = () => {
    return this.props.artistList.map((concert) => {
      return (
        <div className="paper">
          <div key={concert.id}>
            {concert.artists.map((artist) => {
              return (
                <div className="artistListBox" key={artist.id}>
                  <div className="concertInformationBox">
                    <div>
                      <img src={artist.artistPicture} alt="artist" />
                    </div>

                    <div className="concertInfo">
                      <p className="artistName">{artist.artist}</p>
                      <p>{concert.date}</p>
                      <p>
                        {concert.venue}, {concert.location}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      target="_blank"
                      style={{ fontSize: "13px", width: "100%" }}
                      href={artist.spotifyLink}
                    >
                      Listen on spotify{" "}
                      <img
                        className="spotifyLogo"
                        src="/assets/images/spotify-2.svg"
                        alt="spotify logo"
                      />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="paperContainer">{this.showConcerts()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  artistList: state.artistList,
  login: state.login,
  selectedArtist: state.artistSearchResults.selectedArtist,
});

export default connect(mapStateToProps, { getAllUserConcerts })(
  ArtistListContainer
);
