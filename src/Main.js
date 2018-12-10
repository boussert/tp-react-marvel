import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import SuperheroElement from './components/SuperheroElement';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        
        <div class="ui search">
          <input class="prompt" type="text" placeholder="Rechercher..." onChange={ this.search } />
          <div class="results"></div>
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
