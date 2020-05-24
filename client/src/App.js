import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Nav from './components/layout/nav';
import PageRenderer from './page-renderer'
import ArticleDetails from './components/articles/articledetails';

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
        <Route exact path='/:page' component={PageRenderer} />
        <Route exact path="/">
                <Redirect to="/home_page" />
        </Route>
        <Route path='/article/:id' component={ArticleDetails} />
        <Route component={()=>'404'} />
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
