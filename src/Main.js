import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import SuperheroElement from './components/SuperheroElement';

class Main extends Component {
  render() {
    return (
      <div className="Main">

        <div className="ui search">
          <input className="prompt" type="text" placeholder="Rechercher..." onChange={ this.search } />
          <div className="results"></div>
        </div>

        <SuperheroElement />
        <SuperheroElement />

      </div>
    );
  }

    search() {
      console.log("search");
    }

}

export default Main;
