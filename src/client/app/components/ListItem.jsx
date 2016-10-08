var React = require('react');
var ListItem = React.createClass({
  render: function (){
    return <li>{this.props.itemName} {this.props.itemKey}<button onClick={this.props.handleClick}>delete</button></li>;
  }
});
module.exports = ListItem;
