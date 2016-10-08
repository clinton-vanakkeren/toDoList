var React = require('react');
var ListItem = require('./ListItem.jsx');
var ToDoItems = React.createClass({
  render: function (){
    var listItems = [];
     this.props.items.forEach((item,i) => {
      listItems.push(<ListItem itemName={item.text} key={i} itemIndex={i} handleClick={this.props.deleteItem} />);
    })

    return <ul>{listItems}</ul>;
  }
});

module.exports = ToDoItems;
