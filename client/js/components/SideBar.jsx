var React = require('react');
var {Link} = require('react-router');

var SideBar = React.createClass({
  render: function () {
    return (
      <div className='sidebar'>
        <Link to='post-create'>Submit a new post</Link>
        <Link to='subreddit-create'>Create your own subreddit</Link>
      </div>
    );
  }
});

module.exports = SideBar;