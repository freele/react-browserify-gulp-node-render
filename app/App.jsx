/** @jsx React.DOM */
var React = require('react');
var Store = require('./Store.jsx');
var actions = require('./actions.jsx');

var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  getInitialState: function () {
    return {
      messages: Store.getMessages(),
      newMessage: ''
    };
  },
  componentWillMount: function () {
    Store.addChangeListener(this.changeState);
  },
  componentWillUnmount: function () {
    Store.removeChangeListener(this.changeState);
  },
  changeState: function () {
    this.setState({
      messages: Store.getMessages()
    });
  },
  addMessage: function (event) {
    event.preventDefault();
    var input = this.refs.newMessage.getDOMNode();
    actions.addMessage(input.value);
    this.setState({
      newMessage: ''
    });
  },
  updateNewMessage: function (event) {
    this.setState({
      newMessage: event.target.value
    });
  },
  renderMessages: function (message) {
    return (
      <div>{message}</div>
    );
  },

	render: function() {
		return (

          <div>
            <div>Test 21</div>
            {this.state.messages.map(this.renderMessages)}
            <form onSubmit={this.addMessage}>
              <input ref="newMessage" type="text" value={this.state.newMessage} onChange={this.updateNewMessage}/>
            </form>
            <header>
              <ul>
                <li><Link to="app">Home</Link></li>
                <li><Link to="item1">Item1</Link></li>
              </ul>
            </header>

            {/* this is the important part */}
            <RouteHandler/>
          </div>

		);
	}
	
});


module.exports = App;

