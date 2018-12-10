import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import produce from "immer";

class App extends Component {

  getAllHeroes() {
    fetch(process.env.REACT_APP_API_URL + '/v1/public/characters' + '?apikey=' + process.env.REACT_APP_PUBLIC_KEY).then(function (responseJson){
      return responseJson.json();
  }).then(function (response) {
    console.log(response.data.results[0]);
  });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 
          </a>
        </header>
        {this.getAllHeroes()}
      </div>
    );
  }
}

export default App;
