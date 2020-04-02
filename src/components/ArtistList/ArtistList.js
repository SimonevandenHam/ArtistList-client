import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllUserEvents } from "../../store/artistList/action";

export class ArtistList extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { getAllUserEvents })(ArtistList);
