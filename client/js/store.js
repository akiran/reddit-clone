var Reflux = require('reflux');

var Store = Reflux.createStore({
  listenables: require('./actions'),
  init: function () {
    this.subreddits = ['all', 'reactjs', 'flux', 'javascript'];
    this.posts = [
      { id: 0, title: "reactjs - awesome library for building user interfaces ", url: 'http://facebook.github.io/react',  votes: 5, subreddit: 'reactjs'}, 
      { id: 1, title: "flux - new application architecture", url: 'http://facebook.github.io/flux', votes: 10, subreddit: 'flux'} 
    ]
  },
  getInitialState: function () {
    return {
      subreddits: this.subreddits,
      posts: this.posts
    };
  },
  update: function () {
    this.trigger({
      subreddits: this.subreddits,
      posts: this.posts
    })
  },
  onAddSubReddit: function (subreddit) {
    this.subreddits.push(subreddit);
    this.update();
  },
  onCreatePost: function (post) {
    this.posts.push(post)
    this.update();
  },
  onUpVote: function (id) {
    this.posts[id].votes += 1;
    this.update();
  },
  onDownVote: function (id) {
    this.posts[id].votes -= 1;
    this.update();
  }
});

module.exports = Store;