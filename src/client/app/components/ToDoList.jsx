var React = require('react');
var ReactDOM = require('react-dom');
var ToDoItems = require('./ToDoItems.jsx');
var ListItem = require('./ListItem.jsx');

global.jQuery = require('jquery');
require('bootstrap');

var ToDoList = React.createClass({
  getInitialState: function (){
    return {
      items: []
    };
  },

  addItem: function (e){
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this._input.value,
      }
    );
    this.setState({
      items: itemArray
    });

    this._input.value = "";
    e.preventDefault();
  },

  deleteItem: function (key){
    var newItems = this.state.items;
    newItems.splice(key, 1);
    this.setState({items: newItems})
  },
  render: function (){
    var buttonStyle = {
      borderRadius: 0
    };
    var formStyle={
      textAlign: 'center'
    };
    var jumboStyle={
      color: '#ffff99'
    };
    return (
      <div>
        <div className='jumbotron'>
          <form className='form-horizontal' onSubmit={this.addItem} style={formStyle}>
            <div className='form-group'>
              <input placeholder='enter task' className='form-conrol' ref={(a) => this._input =a}>
              </input>
              <button type='submit' className='btn btn-primary' style={buttonStyle}>add
              </button>
            </div>
          </form>
        </div>
          <div className='jumbotron jumbotron-fluid'>
            <div className='container'>
              <ToDoItems items={this.state.items} deleteItem={this.deleteItem} buttonStyle={buttonStyle} />
            </div>
          </div>
      </div>
    );
  }
});

module.exports = ToDoList;
