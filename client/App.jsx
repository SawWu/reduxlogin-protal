import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import NavigationBar from './components/layout/NavigationBar'

export default class App extends Component {
  render() {
    return (
        <div className="container">
          <Router>
            <div>
              <NavigationBar/>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </Router>
        </div>
    );
  }
}
