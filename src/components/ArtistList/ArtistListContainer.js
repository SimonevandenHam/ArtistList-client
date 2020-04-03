import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

import { getAllUserConcerts } from "../../store/artistList/action";

export class ArtistListContainer extends Component {
  componentDidMount() {
    this.props.getAllUserConcerts(this.props.login);
  }

  showConcerts = () => {
    return this.props.artistList.map(concert => {
      return (
        <Paper
          elevation={3}
          style={{ margin: 20, padding: 10, backgroundColor: "bisque" }}
        >
          <div key={concert.id}>
            {concert.artists.map(artist => {
              return (
                <p
                  style={{ fontWeight: "bold", fontSize: 14, color: "#29434e" }}
                  key={artist.id}
                >
                  {artist.artist}
                </p>
              );
            })}
            <p style={{ fontSize: 13, color: "#546e7a" }}>{concert.date}</p>
            <p style={{ fontSize: 13, color: "#546e7a" }}>
              {concert.venue}, {concert.location}
            </p>
          </div>
        </Paper>
      );
    });
  };

  render() {
    return <div>{this.showConcerts()}</div>;
  }
}

const mapStateToProps = state => ({
  artistList: state.artistList,
  login: state.login,
  selectedArtist: state.artistSearchResults.selectedArtist
});

export default connect(mapStateToProps, { getAllUserConcerts })(
  ArtistListContainer
);
