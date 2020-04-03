import React, { Component } from "react";
import { connect } from "react-redux";

import ConcertDetailSection from "./ConcertDetailSection";

export class ConcertDetailContainer extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <ConcertDetailSection concertId={this.props.match.params.concertId} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConcertDetailContainer);
