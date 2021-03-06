import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SignUpFormContainer from "./components/SingUp/SignUpFormContainer";
import LoginFormContainer from "./components/Login/LoginFormContainer";
import ArtistListContainer from "./components/ArtistList/ArtistListContainer";
import AddConcertFormContainer from "./components/AddConcert/AddConcertFormContainer";

import "./styles/generalStyle.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Navbar />
        </header>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUpFormContainer} />
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/myartistlist" component={ArtistListContainer} />
          <Route exact path="/addconcert" component={AddConcertFormContainer} />
        </div>
      </div>
    );
  }
}
export default App;
