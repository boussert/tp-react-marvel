import React, { Component } from 'react';
import '../Main.css';
import { Link } from 'react-router-dom'

class SuperheroDetail extends Component {

  // componentDidMount () {
  //   const { handle } = this.props.match.params
  //
  //   fetch(process.env.REACT_APP_API_URL + '/v1/public/characters/{}' + '?apikey=' + process.env.REACT_APP_PUBLIC_KEY).then(responseJson =>
  //      responseJson.json()
  // ).then(json => this.setState({
  //     listCharac: json.data.results
  //   })
  // );
  // }

  render() {
    return (
      <div>

        <div className="ui grid">
          <div className="eight wide column">
              <img className="ui medium circular image" src="https://fsmedia.imgix.net/67/9f/12/f7/dfb0/4f50/b313/824e861ed92f/the-hulk-thanos.jpeg?rect=0%2C7%2C780%2C390&dpr=2&auto=format%2Ccompress&w=650" />
          </div>
          <div className="eight wide column">
            <h1>Hulk</h1>
            <h2>{this.props.match.params.id}</h2>

            <p>Détail de Hulk ici</p>
          </div>
        </div>


          <h2>Apparition dans les comics : </h2>
            <div className="ui four cards">
              <div className="card">
                <div className="image">
            <img src="https://imgix.ranker.com/user_node_img/50073/1001456640/original/always-on-my-mind-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces" />
                </div>
              </div>

              <div className="card">
                <div className="image">
            <img src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/553797/553797._SX360_QL80_TTD_.jpg" />
                </div>
              </div>

            </div>

      </div>
    );
  }

}

export default SuperheroDetail;
