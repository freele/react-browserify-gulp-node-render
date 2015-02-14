'use strict';


var App = require('./../app/App.jsx');
var TestUtils = require('react-addons').TestUtils;
var React = require('react/addons');

var router = require('./../app/router.jsx');

/////////////////////
// wrap it up first:

var stubRouterContext = require('./stubRouterContext.jsx')

var Subject = stubRouterContext(App);

//////////////////////////
describe("App", function() {

  it("should be wrapped with a div", function() {
    // var app = TestUtils.renderIntoDocument(App());
    // var domNode = app.getDOMNode();
    // expect(app.getDOMNode().tagName).toEqual('DIV');


	// var app = TestUtils.renderIntoDocument(App());
	var app = TestUtils.renderIntoDocument(<Subject />);
	var domNode = app.getDOMNode();
	expect(app.getDOMNode().tagName).toEqual('DIV');

	// React.render(<Handler/>, document.body);
  });

});