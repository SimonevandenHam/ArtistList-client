import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../styles/home.css";

class signUpHereContainer extends React.Component {
  render() {
    return (
      <div className="homePage">
        <div className="signUpHereContainer">
          <h2 className="textContainer">
            KEEP TRACK OFF ALL THE ARTISTS
            <br />
            YOU'VE SEEN LIVE
          </h2>
          <div className="buttonContainer">
            <Link to="/signup">
              <button>Sign up here</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(signUpHereContainer);
