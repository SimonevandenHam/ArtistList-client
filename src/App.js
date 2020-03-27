import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import SignUpHereContainer from "./components/Home/SignUpHereContainer";
import SignUpFormContainer from "./components/SingUp/SignUpFormContainer";

import "./styles/generalStyle.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <div>
          <Route exact path="/" component={SignUpHereContainer} />
          <Route exact path="/signup" component={SignUpFormContainer} />
        </div>
      </div>
    );
  }
}
export default App;
