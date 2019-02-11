import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import SuperheroDetail from './components/Superhero/SuperheroDetail';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';


const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
       <Route exact path="/" component={Main} />
       <Route path="/hero/:id" component={SuperheroDetail}/>
       </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
