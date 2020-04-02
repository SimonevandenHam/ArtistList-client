import React from "react";
import { connect } from "react-redux";

import AddConcertInfoForm from "./AddConcertInfoForm";
import SearchArtistForm from "./SearchArtistForm";
import { userLogin } from "../../store/login/action";

class AddConcertFormContainer extends React.Component {
  render() {
    return (
      <div>
        <SearchArtistForm />
        <AddConcertInfoForm />
      </div>
    );
  }
}

export default connect(null, { userLogin })(AddConcertFormContainer);
