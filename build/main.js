(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/main.jsx":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var App = require('./App.jsx');
React.render(React.createElement(App, null), document);
},{"./App.jsx":"/Users/kremenets/Dev/Projects/MM/New/Starbucks/website/app/App.jsx","react":"react"}],"/Users/kremenets/Dev/Projects/MM/New/Starbucks/website/app/App.jsx":[function(require,module,exports){
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
},{"flux-react":"flux-react"}]},{},["./app/main.jsx"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvbWFpbi5qc3giLCJhcHAvQXBwLmpzeCIsImFwcC9TdG9yZS5qc3giLCJhcHAvYWN0aW9ucy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBcHAgPSByZXF1aXJlKCcuL0FwcC5qc3gnKTtcblJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCksIGRvY3VtZW50KTsiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU3RvcmUgPSByZXF1aXJlKCcuL1N0b3JlLmpzeCcpO1xudmFyIGFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMuanN4Jyk7XG5cblxuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkFwcFwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZXM6IFN0b3JlLmdldE1lc3NhZ2VzKCksXG4gICAgICBuZXdNZXNzYWdlOiAnJ1xuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuY2hhbmdlU3RhdGUpO1xuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCkge1xuICAgIFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuY2hhbmdlU3RhdGUpO1xuICB9LFxuICBjaGFuZ2VTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWVzc2FnZXM6IFN0b3JlLmdldE1lc3NhZ2VzKClcbiAgICB9KTtcbiAgfSxcbiAgYWRkTWVzc2FnZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLnJlZnMubmV3TWVzc2FnZS5nZXRET01Ob2RlKCk7XG4gICAgYWN0aW9ucy5hZGRNZXNzYWdlKGlucHV0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld01lc3NhZ2U6ICcnXG4gICAgfSk7XG4gIH0sXG4gIHVwZGF0ZU5ld01lc3NhZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmV3TWVzc2FnZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlck1lc3NhZ2VzOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIG1lc3NhZ2UpXG4gICAgKTtcbiAgfSxcblxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIsIG51bGwsIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaGVhZFwiLCBudWxsLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7cmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogXCIvbWFpbi5jc3NcIn0pXG4gICAgICAgICksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLCBudWxsLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcIlRlc3QgMTdcIiksIFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAodGhpcy5yZW5kZXJNZXNzYWdlcyksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge29uU3VibWl0OiB0aGlzLmFkZE1lc3NhZ2V9LCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtyZWY6IFwibmV3TWVzc2FnZVwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IHRoaXMuc3RhdGUubmV3TWVzc2FnZSwgb25DaGFuZ2U6IHRoaXMudXBkYXRlTmV3TWVzc2FnZX0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSwgXG5cbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHt0eXBlOiBcInRleHQvamF2YXNjcmlwdFwiLCBzcmM6IFwiL3ZlbmRvcnMuanNcIn0pLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHt0eXBlOiBcInRleHQvamF2YXNjcmlwdFwiLCBzcmM6IFwiL21haW4uanNcIn0pXG4gICAgICAgIClcbiAgICAgIClcblxuXG5cdFx0KTtcblx0fVxuXHRcbn0pO1xuXHRcbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwidmFyIGZsdXggPSByZXF1aXJlKCdmbHV4LXJlYWN0Jyk7XG52YXIgYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucy5qc3gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbHV4LmNyZWF0ZVN0b3JlKHtcbiAgbWVzc2FnZXM6IFtdLFxuICBhY3Rpb25zOiBbXG4gICAgYWN0aW9ucy5hZGRNZXNzYWdlXG4gIF0sXG4gIGFkZE1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICB9LFxuICBleHBvcnRzOiB7XG4gICAgZ2V0TWVzc2FnZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzO1xuICAgIH1cbiAgfVxufSk7IiwidmFyIGZsdXggPSByZXF1aXJlKCdmbHV4LXJlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmx1eC5jcmVhdGVBY3Rpb25zKFtcbiAgJ2FkZE1lc3NhZ2UnXG5dKTsiXX0=
