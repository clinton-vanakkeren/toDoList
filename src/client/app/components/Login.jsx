var React = require('react');

var Login = React.createClass({
  render: function(){
    return (
      <div>
        <h1>You must log in to make a list!</h1>
        <h2>Why?</h2>
        <h3>because fuckyouthatswhy.</h3>
        <form>
          <input name='username' placeholder='enter username' />
          <input name='password' placeholder='enter password' />
          <button type='submit'> sign in </button>
        </form>
      </div>
  );
}
});
module.exports = Login;
