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
              KEEP TRACK OFF ALL THE ARTISTS
              <br />
              YOU'VE SEEN LIVE
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
            <div class="button">
              <Button
                color="primary"
                variant="contained"
                component={Link}
                raised
                to="/addconcert"
              >
                add concert to my list
              </Button>
            </div>
          </div>
          <div className="imageContainer concert">
            <div class="button">
              <Button
                color="primary"
                variant="contained"
                component={Link}
                raised
                to="/myartistlist"
              >
                go to my concert list
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(signUpHereContainer);
