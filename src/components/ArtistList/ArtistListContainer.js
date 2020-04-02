import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllUserConcerts } from "../../store/artistList/action";

export class ArtistListContainer extends Component {
  componentDidMount() {
    this.props.getAllUserConcerts(this.props.login);
  }

  showConcerts = () => {
    return this.props.artistList.map(concert => {
      return (
        <div>
          {concert.artists.map(artist => {
            return <p> {artist.artist} </p>;
          })}
          <p>{concert.date}</p>
          <p>{concert.venue}</p>
          <p>{concert.location}</p>
          <hr />
        </div>
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
