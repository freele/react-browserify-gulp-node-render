/** @jsx React.DOM */
var React = require('react');
var App = require('./App.jsx');

App(function(RoutedApp){
	console.log(RoutedApp);
	React.render(<RoutedApp/>, document.body);
});
