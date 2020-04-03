import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

import { getOneConcertInfo } from "../../store/concertDetail/action";

export class ArtistListContainer extends Component {
  componentDidMount() {
    this.props.getOneConcertInfo(this.props.concertId);
  }

  render() {
    return <div>hiiiii</div>;
  }
}

const mapStateToProps = state => ({
  concertDetail: state.concertDetail
});

export default connect(mapStateToProps, { getOneConcertInfo })(
  ArtistListContainer
);
