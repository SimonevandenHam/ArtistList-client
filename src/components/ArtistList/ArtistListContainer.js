import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

import { getAllUserConcerts } from "../../store/artistList/action";
import "../../styles/artistList.css";

export class ArtistListContainer extends Component {
  componentDidMount() {
    this.props.getAllUserConcerts(this.props.login);
  }

  showConcerts = () => {
    return this.props.artistList.map((concert) => {
      return (
        <Paper
          className="paper"
          elevation={3}
          style={{ margin: 20, padding: 10, backgroundColor: "bisque" }}
        >
          <div key={concert.id}>
            {concert.artists.map((artist) => {
              return (
                <div className="artistListBox" key={artist.id}>
                  <div>
                    <img src={artist.artistPicture} alt="artist" />
                  </div>
                  <div className="concertInformationBox">
                    <p className="artistName">{artist.artist}</p>
                    <div className="concertInfo">
                      <p>{concert.date}</p>
                      <p>
                        {concert.venue}, {concert.location}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Paper>
      );
    });
  };

  render() {
    return <div>{this.showConcerts()}</div>;
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
