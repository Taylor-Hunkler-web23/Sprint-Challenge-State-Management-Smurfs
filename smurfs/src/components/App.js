import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <SmurfList/>
      </div>
    );
  }
}

export default App;
