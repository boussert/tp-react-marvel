import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import BottomScrollListener from 'react-bottom-scroll-listener';
import SuperHeroList from './components/SuperHeroList';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { listCharac: [],
      offset:0
    };
  }

  componentDidMount() {
    this.getAllHeroes();
  }

  getAllHeroes() {
    fetch(process.env.REACT_APP_API_URL + '/v1/public/characters' + '?apikey=' + process.env.REACT_APP_PUBLIC_KEY + "&offset=" + this.state.offset).then(responseJson =>
       responseJson.json()
  ).then(json =>
    this.setState({
      listCharac: this.state.listCharac ? this.state.listCharac.concat(json.data.results) : json.data.results
    })
  );
  }

  loadMore() {
    this.setState({
      offset: this.state.offset + 20
    })
    this.getAllHeroes();
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

      <BottomScrollListener onBottom={() => this.loadMore()} />
     </div>

    );
  }

    search() {
      console.log("search");
    }

}

export default Main;
