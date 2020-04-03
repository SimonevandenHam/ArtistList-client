import React from "react";
import { connect } from "react-redux";

import AddConcertInfoForm from "./AddConcertInfoForm";
import SearchArtistForm from "./SearchArtistForm";
import { userLogin } from "../../store/login/action";
import "../../styles/addConcert.css";

class AddConcertFormContainer extends React.Component {
  render() {
    return (
      <div className="concertContainer">
        <div className="concertFormContainer">
          <SearchArtistForm />
          <AddConcertInfoForm />
        </div>{" "}
      </div>
    );
  }
}

export default connect(null, { userLogin })(AddConcertFormContainer);
