import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "../../styles/home.css";

class signUpHereContainer extends React.Component {
  render() {
    return (
      <div className="homePage">
        <div>
          <div className="signUpHereContainer">
            <h2 className="textContainer">
              START KEEPING TRACK OFF ALL THE ARTISTS YOU'VE SEEN LIVE
            </h2>
            <div className="buttonContainer">
              <Button
                color="primary"
                variant="contained"
                component={Link}
                raised
                to="/signup"
              >
                Sign up here
              </Button>
            </div>
          </div>
        </div>

        <div className="imagesContainer">
          <div className="imageContainer ticket">
            <div className="button">
              <Button
                color="primary"
                variant="contained"
                component={Link}
                raised
                to="/signup"
              >
                Sign up to add concerts to my list
              </Button>
            </div>
          </div>
          <div className="imageContainer concert">
            <div className="button">
              <Button
                color="primary"
                variant="contained"
                component={Link}
                raised
                to="/signup"
              >
                sing up to go to my concert list
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(signUpHereContainer);
