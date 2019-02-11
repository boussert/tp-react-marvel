import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import SuperHeroList from './components/SuperHeroList';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { listCharac: []
    };
  }

  componentDidMount() {
    this.getAllHeroes();
  }

  getAllHeroes() {
    fetch(process.env.REACT_APP_API_URL + '/v1/public/characters' + '?apikey=' + process.env.REACT_APP_PUBLIC_KEY).then(responseJson =>
       responseJson.json()
  ).then(json =>
    this.setState({
      listCharac: json.data.results
    })
  );
  }

  render() {
    return (
      <div className="Main">

        <h1>Marvel superheroes</h1>
        <div className="ui search">
          <input className="prompt" type="text" placeholder="Rechercher..." onChange={ this.search } />
          <div className="results"></div>
        </div>

        <SuperHeroList
        list = {this.state.listCharac}
        />
      </div>

    );
  }

    search() {
      console.log("search");
    }

}

export default Main;
