var React = require('react');
var ReactDOM = require('react-dom');

import { Router, Route, hashHistory } from 'react-router'
import ToDoList from './components/ToDoList.jsx'
import Login from './components/Login.jsx'
import 'core-js/fn/object/assign';
import Auth0Lock from 'auth0-lock'

var App = React.createClass({
  getInitialState: function(){
    return {
      idToken: null
    }
  },
  componentWillMount: function(){
    this.createLock();
    //this.setState({idToken: this.getIdToken()})
  },
  createLock: function(){
    const myAuth0ClientId = 'qPBsP4e9cb5K7O57WQ8KP1XSZKZehWFh';
    const myAuth0Domain = 'cvanakkeren.auth0.com';
    this.lock = new Auth0Lock(myAuth0ClientId, myAuth0Domain);
  },

  getIdToken: function() {
  // First, check if there is already a JWT in local storage
  var idToken = localStorage.getItem('id_token');
 var authHash = this.lock.parseHash(window.location.hash);
  // If there is no JWT in local storage and there is one in the URL hash,
  // save it in local storage
  if (!idToken && authHash) {
   if (authHash.id_token) {
     idToken = authHash.id_token
     localStorage.setItem('id_token', authHash.id_token);
   }
   if (authHash.error) {
     // Handle any error conditions
     console.log("Error signing in", authHash);
   }
  }
 return idToken;
 },
 render: function(){
   return <Login lock={this.lock}  />;
 }
});


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/list" component={ToDoList} />
  </Router>
  ), document.getElementById('app'));
