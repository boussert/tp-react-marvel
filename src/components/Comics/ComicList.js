import React from 'react';
import '../../Main.css';
import ComicElement from './ComicElement';

function ComicList(props) {
        return (
            props.list.map((comic, index) =>(
              
              <ComicElement 
                    key={comic.results}
                    resource={comic.resourceURI}
                    name={comic.name}
                  />
              
            ))
        );
}

export default ComicList;
