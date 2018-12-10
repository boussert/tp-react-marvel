import React, { Component } from 'react';
import '../Main.css';
import { Link } from 'react-router-dom'

class SuperheroDetail extends Component {

  render() {
    return (
      <div>

        <div class="ui grid">
          <div class="eight wide column">
              <img class="ui small circular image" src="../hulk.jpg" />
          </div>
          <div class="eight wide column">
            <h1>Hulk</h1>

            <p>Détail de Hulk ici</p>
          </div>
        </div>


          <h2>Apparition dans les comics : </h2>
            <div class="ui four cards">
              <div class="card">
                <div class="image">
            <img src="/comic1.png" />
                </div>
              </div>

              <div class="card">
                <div class="image">
            <img src="/comic2.png" />
                </div>
              </div>

            </div>

      </div>
    );
  }

}

export default SuperheroDetail;
