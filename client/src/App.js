import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Nav from './components/nav';
import PageRenderer from './page-renderer'

function App() {
  const user = {
    firstName : 'Peng',
    lastName : 'Jiang'
  }
  return (
    <Router>
    <div className="App">
      <Nav user={user}/>
      <Switch>
      {/* Render dynamic page without maintaining navlinks */}
      <Route path='/:page' component={PageRenderer} />
      <Route path="/" render={() => <Redirect to="/home"/>} />
      <Route component={()=>'404'} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
