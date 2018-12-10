import React, { Component } from 'react';
import '../Main.css';
import { Link } from 'react-router-dom';
import SuperheroElement from './SuperheroElement';

function SuperheroList(props) {
        return (
            props.list.map((charac, index) =>(
              <SuperheroElement
                    id={charac.id}
                    image={charac.thumbnail.path+'.'+charac.thumbnail.extension}
                    nom={charac.name}
                  />
            ))   
        );
}

export default SuperheroList;