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

        <h1 class="ui header">Marvel superheroes</h1>
        <div className="ui search">
          <input className="prompt" type="text" placeholder="Rechercher..." onChange={ this.search } />
          <div className="results"></div>
        </div>

        <SuperHeroList
        list = {this.state.listCharac}
        />


    <div aria-label="Pagination Navigation" role="navigation" class="ui pagination menu"><a aria-current="false" aria-disabled="false" tabindex="0" value="1" aria-label="Previous item" type="prevItem" class="item">⟨</a><a aria-current="true" aria-disabled="false" tabindex="0" value="1" type="pageItem" class="active item">1</a><a aria-current="false" aria-disabled="false" tabindex="0" value="2" type="pageItem" class="item">2</a><a aria-current="false" aria-disabled="false" tabindex="0" value="3" type="pageItem" class="item">3</a><a aria-current="false" aria-disabled="false" tabindex="0" value="2" aria-label="Next item" type="nextItem" class="item">⟩</a></div>
    </div>

    );
  }

    search() {
      console.log("search");
    }

}

export default Main;
