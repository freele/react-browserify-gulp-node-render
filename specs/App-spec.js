var App = require('./../app/App.jsx');
var TestUtils = require('react-addons').TestUtils;

describe("App", function() {

  it("should be wrapped with a div", function() {
    var app = TestUtils.renderIntoDocument(App());
    var domNode = app.getDOMNode();
    expect(app.getDOMNode().tagName).toEqual('DIV');
  });

});