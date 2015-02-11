/** @jsx React.DOM */
var React = require('react');
var Store = require('./Store.jsx');
var actions = require('./actions.jsx');



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

      <html>
        <head>
          <link rel="stylesheet" href="/main.css"/>
        </head>
        <body>
          <div>
            <div>Test 17</div>
            {this.state.messages.map(this.renderMessages)}
            <form onSubmit={this.addMessage}>
              <input ref="newMessage" type="text" value={this.state.newMessage} onChange={this.updateNewMessage}/>
            </form>
          </div>

          <script type="text/javascript" src="/vendors.js"></script>
          <script type="text/javascript" src="/main.js"></script>
        </body>
      </html>


		);
	}
	
});
	
module.exports = App;
