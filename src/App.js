import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Landing from './Landing/Landing'

import Submit from './Submit/Submit';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact from = "/" to = "/landing" component = {Landing}/>
        <Route path = "/submit" component={Submit}/>
      </Switch>
    </Router>
  );
}

export default App;
