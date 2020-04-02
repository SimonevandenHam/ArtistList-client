import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllUserConcerts } from "../../store/artistList/action";

//console.log(this.props.getAllUserConcerts(this.props.login));

export class ArtistList extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => ({
  artistList: state.artistList,
  login: state.login
});

export default connect(mapStateToProps, { getAllUserConcerts })(ArtistList);
