var React = require('react');
var ListItem = React.createClass({
  onClickHandler: function () {
    this.props.handleClick(this.props.itemIndex)
  },

  render: function (){
    return <li>{this.props.itemName} {this.props.itemIndex}<button onClick={this.onClickHandler}>delete</button></li>;
  }
});
module.exports = ListItem;
