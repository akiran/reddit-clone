var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
       <h1>Welcome</h1>
       <h1>Start building reddit like application</h1>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('rapp'));
