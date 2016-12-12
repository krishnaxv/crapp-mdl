import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import About from '../components/About/About';
import App from '../components/App/App';
import Home from '../components/Home/Home';
import Autocomplete from '../components/Autocomplete/Autocomplete';

const routes = (props) => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="autocomplete" component={Autocomplete} />
      </Route>
    </Router>
  );
}

export default routes;
