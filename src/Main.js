import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import SuperheroElement from './components/SuperheroElement';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { listCharac: [] 
    };
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

        <div className="ui search">
          <input className="prompt" type="text" placeholder="Rechercher..." onChange={ this.search } />
          <div className="results"></div>
        </div>

        <SuperheroElement />
        <SuperheroElement />
        {this.getAllHeroes()}
        {this.state.listCharac.map((charac, index) =>(
          <td>{charac.name}</td>
        ))}
      </div>
      
    );
  }

    search() {
      console.log("search");
    }

}

export default Main;
