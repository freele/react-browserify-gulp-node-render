(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./specs/App-spec.js":[function(require,module,exports){
var App = require('./../app/App.jsx');
var TestUtils = require('react-addons').TestUtils;

describe("App", function() {

  it("should be wrapped with a div", function() {
    var app = TestUtils.renderIntoDocument(App());
    expect(app.getDOMNode().tagName).toEqual('DIV');
  });

});
},{"./../app/App.jsx":"/Users/kremenets/Dev/Projects/MM/New/Starbucks/website/app/App.jsx","react-addons":"react-addons"}],"/Users/kremenets/Dev/Projects/MM/New/Starbucks/website/app/App.jsx":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var Store = require('./Store.jsx');
var actions = require('./actions.jsx');



var App = React.createClass({displayName: "App",
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
      React.createElement("div", null, message)
    );
  },

	render: function() {
		return (

      React.createElement("html", null, 
        React.createElement("head", null, 
          React.createElement("link", {rel: "stylesheet", href: "/main.css"})
        ), 
        React.createElement("body", null, 
          React.createElement("div", null, 
            React.createElement("div", null, "Test 17"), 
            this.state.messages.map(this.renderMessages), 
            React.createElement("form", {onSubmit: this.addMessage}, 
              React.createElement("input", {ref: "newMessage", type: "text", value: this.state.newMessage, onChange: this.updateNewMessage})
            )
          ), 

          React.createElement("script", {type: "text/javascript", src: "/vendors.js"}), 
          React.createElement("script", {type: "text/javascript", src: "/main.js"})
        )
      )


		);
	}
	
});
	
module.exports = App;

},{"./Store.jsx":"/Users/kremenets/Dev/Projects/MM/New/Starbucks/website/app/Store.jsx","./actions.jsx":"/Users/kremenets/Dev/Projects/MM/New/Starbucks/website/app/actions.jsx","react":"react"}],"/Users/kremenets/Dev/Projects/MM/New/Starbucks/website/app/Store.jsx":[function(require,module,exports){
var flux = require('flux-react');
var actions = require('./actions.jsx');

module.exports = flux.createStore({
  messages: [],
  actions: [
    actions.addMessage
  ],
  addMessage: function (message) {
    this.messages.push(message);
    this.emitChange();
  },
  exports: {
    getMessages: function () {
      return this.messages;
    }
  }
});
},{"./actions.jsx":"/Users/kremenets/Dev/Projects/MM/New/Starbucks/website/app/actions.jsx","flux-react":"flux-react"}],"/Users/kremenets/Dev/Projects/MM/New/Starbucks/website/app/actions.jsx":[function(require,module,exports){
var flux = require('flux-react');

module.exports = flux.createActions([
  'addMessage'
]);
},{"flux-react":"flux-react"}]},{},["./specs/App-spec.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjcy9BcHAtc3BlYy5qcyIsImFwcC9BcHAuanN4IiwiYXBwL1N0b3JlLmpzeCIsImFwcC9hY3Rpb25zLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQXBwID0gcmVxdWlyZSgnLi8uLi9hcHAvQXBwLmpzeCcpO1xudmFyIFRlc3RVdGlscyA9IHJlcXVpcmUoJ3JlYWN0LWFkZG9ucycpLlRlc3RVdGlscztcblxuZGVzY3JpYmUoXCJBcHBcIiwgZnVuY3Rpb24oKSB7XG5cbiAgaXQoXCJzaG91bGQgYmUgd3JhcHBlZCB3aXRoIGEgZGl2XCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcHAgPSBUZXN0VXRpbHMucmVuZGVySW50b0RvY3VtZW50KEFwcCgpKTtcbiAgICBleHBlY3QoYXBwLmdldERPTU5vZGUoKS50YWdOYW1lKS50b0VxdWFsKCdESVYnKTtcbiAgfSk7XG5cbn0pOyIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTdG9yZSA9IHJlcXVpcmUoJy4vU3RvcmUuanN4Jyk7XG52YXIgYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucy5qc3gnKTtcblxuXG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQXBwXCIsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlczogU3RvcmUuZ2V0TWVzc2FnZXMoKSxcbiAgICAgIG5ld01lc3NhZ2U6ICcnXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5jaGFuZ2VTdGF0ZSk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5jaGFuZ2VTdGF0ZSk7XG4gIH0sXG4gIGNoYW5nZVN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtZXNzYWdlczogU3RvcmUuZ2V0TWVzc2FnZXMoKVxuICAgIH0pO1xuICB9LFxuICBhZGRNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBpbnB1dCA9IHRoaXMucmVmcy5uZXdNZXNzYWdlLmdldERPTU5vZGUoKTtcbiAgICBhY3Rpb25zLmFkZE1lc3NhZ2UoaW5wdXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmV3TWVzc2FnZTogJydcbiAgICB9KTtcbiAgfSxcbiAgdXBkYXRlTmV3TWVzc2FnZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdNZXNzYWdlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyTWVzc2FnZXM6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgbWVzc2FnZSlcbiAgICApO1xuICB9LFxuXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImh0bWxcIiwgbnVsbCwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsIG51bGwsIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtyZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBcIi9tYWluLmNzc1wifSlcbiAgICAgICAgKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsIG51bGwsIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwiVGVzdCAxN1wiKSwgXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1lc3NhZ2VzLm1hcCh0aGlzLnJlbmRlck1lc3NhZ2VzKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7b25TdWJtaXQ6IHRoaXMuYWRkTWVzc2FnZX0sIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3JlZjogXCJuZXdNZXNzYWdlXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5uZXdNZXNzYWdlLCBvbkNoYW5nZTogdGhpcy51cGRhdGVOZXdNZXNzYWdlfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLCBcblxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge3R5cGU6IFwidGV4dC9qYXZhc2NyaXB0XCIsIHNyYzogXCIvdmVuZG9ycy5qc1wifSksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge3R5cGU6IFwidGV4dC9qYXZhc2NyaXB0XCIsIHNyYzogXCIvbWFpbi5qc1wifSlcbiAgICAgICAgKVxuICAgICAgKVxuXG5cblx0XHQpO1xuXHR9XG5cdFxufSk7XG5cdFxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCJ2YXIgZmx1eCA9IHJlcXVpcmUoJ2ZsdXgtcmVhY3QnKTtcbnZhciBhY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zLmpzeCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsdXguY3JlYXRlU3RvcmUoe1xuICBtZXNzYWdlczogW10sXG4gIGFjdGlvbnM6IFtcbiAgICBhY3Rpb25zLmFkZE1lc3NhZ2VcbiAgXSxcbiAgYWRkTWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gIH0sXG4gIGV4cG9ydHM6IHtcbiAgICBnZXRNZXNzYWdlczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXM7XG4gICAgfVxuICB9XG59KTsiLCJ2YXIgZmx1eCA9IHJlcXVpcmUoJ2ZsdXgtcmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbHV4LmNyZWF0ZUFjdGlvbnMoW1xuICAnYWRkTWVzc2FnZSdcbl0pOyJdfQ==
