import React, { Component } from 'react';
import '../Main.css';
import { Link } from 'react-router-dom'

class SuperheroElement extends Component {

  render() {

    return (
      <div className="ui card">
        <div className="image">
          <img src="https://fsmedia.imgix.net/67/9f/12/f7/dfb0/4f50/b313/824e861ed92f/the-hulk-thanos.jpeg?rect=0%2C7%2C780%2C390&dpr=2&auto=format%2Ccompress&w=650" />
        </div>

        <div className="content">
          <a className="header">Hulk</a>
        </div>

        <div className="extra content">
          <button><Link to="/hero/$250" replace >Voir le détail</Link></button>
        </div>

      </div>
    );
  }

}

export default SuperheroElement;
