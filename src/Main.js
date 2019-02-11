import React, { Component } from 'react';
import './Main.css';
import SuperHeroList from './components/SuperHeroList';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listCharac: [],
      filteredListCharac: [],
      query: ''
    };
  }

  handleInputChange = () => {
    if (this.search.value == undefined || this.search.value == "") {
      this.setState({
        filteredListCharac: this.state.listCharac
      })
    } else {
      this.setState({
        query: this.search.value
      }, () => {
        this.getHeroesByQuery();
      }) 
    }
    
  }

  componentDidMount() {
    this.getAllHeroes();
  }

  getHeroesByQuery(){
    fetch(process.env.REACT_APP_API_URL + '/v1/public/characters' + '?nameStartsWith=' + this.state.query + '&apikey=' + process.env.REACT_APP_PUBLIC_KEY).then(responseJson =>
      responseJson.json()
 ).then(json => 
  this.setState({
    filteredListCharac: json.data.results
  })
  )
}

  getAllHeroes() {
    fetch(process.env.REACT_APP_API_URL + '/v1/public/characters' + '?apikey=' + process.env.REACT_APP_PUBLIC_KEY).then(responseJson =>
       responseJson.json()
  ).then(json =>
    this.setState({
      listCharac: json.data.results,
      filteredListCharac: json.data.results
    })
  );
  }



  render() {
    var queryHasResults;
    if(this.state.filteredListCharac.length == 0) {
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
        list = {this.state.filteredListCharac}
        />
        </div>
        
        {queryHasResults == false &&
          <div class="no-results">
            <p>Aucun résultat trouvé</p>
          </div>
        }

    <div aria-label="Pagination Navigation" role="navigation" class="ui pagination menu"><a aria-current="false" aria-disabled="false" tabindex="0" value="1" aria-label="Previous item" type="prevItem" class="item">⟨</a><a aria-current="true" aria-disabled="false" tabindex="0" value="1" type="pageItem" class="active item">1</a><a aria-current="false" aria-disabled="false" tabindex="0" value="2" type="pageItem" class="item">2</a><a aria-current="false" aria-disabled="false" tabindex="0" value="3" type="pageItem" class="item">3</a><a aria-current="false" aria-disabled="false" tabindex="0" value="2" aria-label="Next item" type="nextItem" class="item">⟩</a></div>
    </div>

    );
  }

}

export default Main;
