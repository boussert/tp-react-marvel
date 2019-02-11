import React from 'react';
import '../../Main.css';
import SuperheroElement from './SuperheroElement';

function SuperheroList(props) {
        return (
            props.list.map((charac, index) =>(              
              <SuperheroElement
                    charac={charac}
                    image={charac.thumbnail.path+'.'+charac.thumbnail.extension}
                    nom={charac.name}
                  />              
            ))
        );
}

export default SuperheroList;
