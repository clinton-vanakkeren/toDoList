var React = require('react');
var ReactDOM = require('react-dom');
var ToDoItems = require('./components/ToDoItems.jsx');
var ListItem = require('./components/ListItem.jsx');
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
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input placeholder='enter task' ref={(a) => this._input =a}>
          </input>
          <button type='submit'>add
          </button>
        </form>
        <div>
          <ToDoItems items={this.state.items} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
});
ReactDOM.render(<ToDoList />,document.getElementById('app'));
