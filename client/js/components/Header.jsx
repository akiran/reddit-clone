var React = require('react');
var {Link} = require('react-router');

var Header = React.createClass({
  render: function () {
    var list = this.props.subreddits.map(function(subreddit) {
      return <li key={subreddit}><Link to={'/r/' + subreddit}>{subreddit}</Link></li>;
    });
    return (
      <div className='header'>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
});

module.exports = Header;