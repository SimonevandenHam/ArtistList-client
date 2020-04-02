import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllUserConcerts } from "../../store/artistList/action";

export class ArtistListContainer extends Component {
  componentDidMount() {
    this.props.getAllUserConcerts(this.props.login);
  }

  render() {
    const concertInformation = {
      concert: this.props.artistList,
      artist: this.props.selectedArtist
    };

    console.log("concertinfo", concertInformation);

    const showConcerts = () => {
      console.log("artistlist", this.props.artistList);
      return this.props.artistList.map(concert => {
        return (
          <div>
            <p>{concert.date}</p>
            <p>{concert.venue}</p>
            <p>{concert.location}</p>
          </div>
        );
      });
    };
    console.log(this.props.getAllUserConcerts());
    return (
      <div>
        {showConcerts()}
        hiiiiii
      </div>
    );
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
