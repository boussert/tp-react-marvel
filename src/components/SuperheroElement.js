import React, { Component } from 'react';
import '../Main.css';
import { Link } from 'react-router-dom'

function SuperheroElement(props) {

    return (
      <div className="ui card">
        <div className="image">
          <img src={props.image} />
        </div>

        <div className="content">
          <a className="header">{props.nom}</a>
        </div>

        <div className="extra content">
          <button><Link to={`/hero/${ props.charac.id }`} replace >Voir le détail</Link></button>
        </div>
      </div>
    );


}

export default SuperheroElement;
