var React = require('react');
var ReactDOM = require('react-dom');

import { Router, Route, hashHistory } from 'react-router'
import ToDoList from './components/ToDoList.jsx'
import Login from './components/Login.jsx'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Login} />
    <Route path="/list" component={ToDoList} />
  </Router>
  ), document.getElementById('app'));
