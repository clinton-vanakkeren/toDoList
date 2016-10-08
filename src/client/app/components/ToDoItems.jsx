var React = require('react');
var ListItem = require('./ListItem.jsx');
var ToDoItems = React.createClass({
  render: function (){
    var makeTasks= this.props.makeTasks;
    makeTasks();
    var listItems=this.props.listItems;
    return <ul>{listItems}</ul>;
  }
});

module.exports = ToDoItems;
