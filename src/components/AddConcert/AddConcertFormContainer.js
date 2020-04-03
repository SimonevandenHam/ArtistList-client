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
          <h4 style={{ color: "#29434e", fontWeigth: "bold" }}>
            Add a concert to your concert list
          </h4>
          <SearchArtistForm />
          <AddConcertInfoForm />
        </div>{" "}
      </div>
    );
  }
}

export default connect(null, { userLogin })(AddConcertFormContainer);
