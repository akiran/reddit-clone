var React = require('react');
var Actions = require('../actions');
var {Navigation} = require('react-router');

var PostCreate = React.createClass({
  mixins: [Navigation],
  getInitialState: function () {
    return {
      title: '',
      url: '',
      subreddit: ''
    }
  },
  titleHandler: function (e) {
    this.setState({title: e.target.value});
  },
  urlHandler: function (e) {
    this.setState({url: e.target.value});
  },
  subredditHandler: function (e) {
    this.setState({subreddit: e.target.value});
  },
  submitHandler: function (e) {
    e.preventDefault();
    Actions.createPost({
      title: this.state.title,
      url: this.state.url,
      subreddit: this.state.subreddit,
      votes: 0,
      id: this.props.posts.length
    })
    var redirectPath = '/r/' + (this.state.subreddit || 'all');
    this.transitionTo(redirectPath);
  },
  render: function () {
    var options = this.props.subreddits.map(function(subreddit) {
      return <option key={subreddit}>{subreddit}</option>
    })
    return (
      <form action="" className='post-form' onSubmit={this.submitHandler}>
        <label>Title</label>
        <input placeholder='title' onChange={this.titleHandler} />
        <label>URL</label>
        <input placeholder='url' onChange={this.urlHandler} />
        <label>Choose a subreddit</label>
        <select name="subreddit" onChange={this.subredditHandler}>
          {options}
        </select>
        <button type='submit'>Submit</button>
      </form>
    );
  }
});

module.exports = PostCreate;