import React, { Component } from 'react';
import '../../Main.css';

class ComicElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comic: null
          };
      }

      componentDidMount() {
        fetch(this.props.resource+ '?apikey=' + process.env.REACT_APP_PUBLIC_KEY).then(responseJson =>
           responseJson.json()
         ).then(json => {
             console.log("json : ", json.data.results[0]);
           this.setState({
            comic: json.data.results[0]
           })
         })
     }

     render() {
        // Chargement des données
          if(!this.state.comic) {
            return <div />
          }

          return (
            <div className="ui card card-flex">
           
                {this.state.comic.images.length > 0 &&
                    <div className="image">            
                        <img alt="Première page du comic" src={this.state.comic.images[0].path+'.'+this.state.comic.images[0].extension} />
                        <a class="ui green ribbon label">{this.props.name}</a>
                     </div>  
                 }                
            </div>
        );
    }

}

export default ComicElement;