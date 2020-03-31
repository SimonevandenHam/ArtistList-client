import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import AddConcertInfoForm from "./AddConcertInfoForm";
import SearchArtistForm from "./SearchArtistForm";
import { userLogin } from "../../store/login/action";

class AddConcertFormContainer extends React.Component {
  state = {
    artist: "",
    startDate: "",
    endDate: "",
    venue: "",
    location: ""
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    // console.log("LOGIN?", this.props.login);
    // if (this.props.login !== "") {
    //   return <Redirect to="/myartistlist" />;
    // } else {
    return (
      <div>
        <SearchArtistForm />
        <AddConcertInfoForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   login: state.login
// });

export default connect(null, { userLogin })(AddConcertFormContainer);
