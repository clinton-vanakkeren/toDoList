var React = require('react');
var ListItem = require('./ListItem.jsx');
var ToDoItems = React.createClass({
  render: function (){
    const listItems = this.props.items.map((item) => {
      return <ListItem itemName={item.text} itemKey={item.key} handleClick={this.props.deleteItem} />
    })

    return <ul>{listItems}</ul>;
  }
});

module.exports = ToDoItems;
