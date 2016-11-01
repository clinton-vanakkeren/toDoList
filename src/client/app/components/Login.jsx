var React = require('react');

import Auth0Lock from 'auth0-lock'

var Login = React.createClass({
  showLock: function() {
  // Show the Auth0Lock widget
  this.props.lock.show();
  },
  render: function(){
    return (
      <div>
        <h1>You must log in to make a list!</h1>
        <h2>Why?</h2>
        <h3>because fuckyouthatswhy.</h3>
        <form>
          <input name='username' placeholder='enter username' />
          <input name='password' placeholder='enter password' />
          <button type='submit' onClick={this.showLock}> sign in </button>
        </form>
      </div>
  );
}
});
module.exports = Login;
