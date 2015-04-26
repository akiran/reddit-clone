var React = require('react');
var Actions = require('../actions');
var {State} = require('react-router');
var filter = require('lodash.filter');

var PostList = React.createClass({
  mixins: [State],
  render: function () {
    var posts;
    var postList;
    var subreddit = this.getParams().subreddit;
    if (subreddit === 'all') {
      posts = this.props.posts;
    } else {
      posts = filter(this.props.posts, {subreddit: subreddit});
    }
    if (posts.length > 0) {
      postList = posts.map(function (post) {
        return (
          <div key={post.id} className='post'>
            <div className='post-vote'>
              <i className='fa fa-arrow-up' onClick={Actions.upVote.bind(this, post.id)}></i>
              <div>{post.votes}</div>
              <i className='fa fa-arrow-down' onClick={Actions.downVote.bind(this, post.id)}></i>
            </div>
            <div className='content'>
              <a href={post.url}>{post.title}</a>
            </div>
          </div>
        );
      });
    } else {
      postList = <p>No posts in this sub reddit</p>;
    }
    return (
      <div>{postList}</div>
    );
  }
});

module.exports = PostList;