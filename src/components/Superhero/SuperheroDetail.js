import React, { Component } from 'react';
import '../../Main.css';
import ComicList from '../Comics/ComicList';

class SuperheroDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      character: null
    };
  }

   componentDidMount() {
     fetch(process.env.REACT_APP_API_URL + '/v1/public/characters/' + this.props.match.params.id + '?apikey=' + process.env.REACT_APP_PUBLIC_KEY).then(responseJson =>
        responseJson.json()
      ).then(json => {
        this.setState({
          character: json.data.results[0]
        })
      })
  }

  render() {
    // Chargement des données
      if(!this.state.character) {
        return <div />
      }

    return (
      <div>

        <div className="ui grid">
          <div className="six wide column">
              <img alt="Illustration du superhéros" className="ui medium circular image character-image" src={this.state.character.thumbnail.path+'.'+this.state.character.thumbnail.extension}></img>
          </div>

          <div className="ten wide column">
            <h1 className="h1-detail-hero">{this.state.character.name}</h1>

            <p>{this.state.character.description}</p>
          </div>
        </div>

        <h4 class="ui horizontal divider header">
        <i class="book icon"></i>
        Apparition dans les comics :
        </h4>

          <div className="cards-flex">
          <ComicList
            list = {this.state.character.comics.items}
          />
        </div>
      </div>
    );
  }

}

export default SuperheroDetail;
