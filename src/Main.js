import React, { Component } from 'react';
import './Main.css';
import BottomScrollListener from 'react-bottom-scroll-listener';
import SuperHeroList from './components/Superhero/SuperHeroList';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        offset:0,
        listCharac: [],
        query: '',
        isSearchActive: false  
    };
  }

  handleInputChange = () => {
    var emptyList = [];
    if (this.search.value === undefined || this.search.value === "") {
      this.setState({
        isSearchActive: false,
        offset: 0,
        query: this.search.value,
        listCharac: emptyList
      }, () => {        
        this.getAllHeroes();
      })
    } else {
      this.setState({
        query: this.search.value,
        isSearchActive: true
      }, () => {
        this.getHeroesByQuery();
      }) 
    }
  }

  componentDidMount() {
    this.getAllHeroes();
  }

  getHeroesByQuery(){
    fetch(process.env.REACT_APP_API_URL + '/v1/public/characters' + '?nameStartsWith=' + this.state.query + '&apikey=' + process.env.REACT_APP_PUBLIC_KEY + '&limit=30' ).then(responseJson =>
      responseJson.json()
 ).then(json => 
  this.setState({
    listCharac: json.data.results
  })
  )
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
    if (this.state.isSearchActive === false) {
        this.getAllHeroes();

        this.setState({
          offset: this.state.offset + 20
        })
    }
    
  }

  render() {
    var queryHasResults;
    if(this.state.listCharac.length === 0) {
      queryHasResults = false;
    } else {
      queryHasResults = true;
    }

    return (
      <div className="Main">
        <img src={ require('./assets/logo-marvel-header.png') } height="250"/>

        <div className="ui search searchbar">
          <input 
              className="prompt search-input"
              type="text"
              placeholder="Rechercher..."
              ref={input => this.search = input}
              onChange={ this.handleInputChange } />
          <div className="results"></div>
        </div>

        <div className="cards-flex">
        <SuperHeroList
        list = {this.state.listCharac}
        />
        </div>
        
        {queryHasResults == false &&
          <div className="no-results">
            <p>Aucun résultat trouvé</p>
          </div>
        }

      <BottomScrollListener onBottom={() => this.loadMore()} />
     </div>

    );
  }

}

export default Main;
