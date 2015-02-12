/** @jsx React.DOM */
var React = require('react');

var App = require('./App.jsx');
var Item1 = require('./components/Item1.jsx');
var Home = require('./components/Home.jsx');


var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="item1" handler={Item1}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});