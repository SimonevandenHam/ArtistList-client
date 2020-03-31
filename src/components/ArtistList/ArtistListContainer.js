import React, { Component } from "react";
import { connect } from "react-redux";

export class ArtistListContainer extends Component {
  render() {
    return <div>hiiiiii</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistListContainer);
