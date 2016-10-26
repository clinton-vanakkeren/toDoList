var React = require('react');
var ListItem = React.createClass({
  onClickHandler: function () {
    this.props.handleClick(this.props.itemIndex)
  },

  render: function (){
    return <li>{this.props.itemName} <button onClick={this.onClickHandler} className='btn btn-danger' style={this.props.buttonStyle}>delete</button></li>;
  }
});
module.exports = ListItem;
