import React from 'react';
import '../../Main.css';
import { Link } from 'react-router-dom'

function SuperheroElement(props) {

    return (
      <div className="ui card card-flex">
        <div className="image">
          <img src={props.image} alt="Superhéros" />
        </div>

        <div className="content">
          <a className="header">{props.nom}</a>
        </div>

        <div className="extra content">
         
          <a href="#" class="cta">
          <Link to={`/hero/${ props.charac.id }`} >
            <span>Voir le détail</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
            </Link>
          </a>

        </div>
      </div>
    );


}

export default SuperheroElement;
