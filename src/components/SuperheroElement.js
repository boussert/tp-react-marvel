import React, { Component } from 'react';
import '../Main.css';
import { Link } from 'react-router-dom'

class SuperheroElement extends Component {

  render() {

    return (
      <div class="ui card">
        <div class="image">
          <img src="../hulk.jpg" />
        </div>

        <div class="content">
          <a class="header">Hulk</a>
        </div>

        <div class="extra content">
          <button><Link to="/hero/:name" replace >Voir le détail</Link></button>
        </div>

      </div>
    );
  }

}

export default SuperheroElement;
