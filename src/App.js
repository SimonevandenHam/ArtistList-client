import React from "react";

import Navbar from "./components/Navbar/Navbar";
import SignUpHereContainer from "./components/Home/SignUpHereContainer";

import "./styles/generalStyle.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <div>
          <SignUpHereContainer />
        </div>
      </div>
    );
  }
}
export default App;
