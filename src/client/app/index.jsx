var React = require('react');
var ReactDOM = require('react-dom');
var ToDoItems = require('./components/ToDoItems.jsx');
var ListItem = require('./components/ListItem.jsx');
var ToDoList = React.createClass({
  getInitialState: function (){
    return {
      items: [],
      index: 0
    };
  },
  // makeTasks: function(item){
  //   var toDoEntries = this.state.items;
  //   function makeTasks(item) {
  //     return <ListItem itemName={item.text} itemKey={item.key} handleClick={deleteItem} />
  //     }
  //   var listItems = toDoEntries.map(makeTasks);
  //   this.setState({listItems: listItems});
  // },
  addItem: function (e){
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this._input.value,
        key: this.state.index
      }
    );
    var counter= this.state.index;
    counter= counter+1;
    this.setState({
      items: itemArray,
      index: counter,
    });

    this._input.value = "";
    e.preventDefault();
  },

  deleteItem: function (){
      var index = this.props.itemKey;
      alert('index is '+index);
      var itemArray=this.state.items;
      itemArray.splice(index,1);
      alert(itemArray[0]);
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
