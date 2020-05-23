import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Nav from './components/layout/nav';
import PageRenderer from './page-renderer'

const user = {
  id: '',
  fName : 'Peng',
  lName : 'Jiang',
  userName: 'Joesph'
}

class App extends Component {

  componentDidMount(){
    // this.props.loadTodos();
  }

  render(){
  return (
    <Router>
      <div className="App">
        <Nav user={user}/>
        <Switch>
        {/* Render dynamic page without maintaining navlinks */}
        <Route path='/:page' component={PageRenderer} />
        <Route exact path="/">
                <Redirect to="/home_page" />
              </Route>
        <Route component={()=>'404'} />
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
