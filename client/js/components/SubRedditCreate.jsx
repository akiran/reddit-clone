var React = require('react');
var Actions = require('../actions');

var SubRedditCreate = React.createClass({
  getInitialState: function () {
    return {subreddit: ''};
  },
  changeHandler: function (e) {
    this.setState({subreddit: e.target.value});
  },
  submitHandler: function (e) {
    e.preventDefault();
    Actions.addSubReddit(this.state.subreddit);
    this.setState({subreddit: ''});
  },
  render: function () {
    return (
      <form action="" className="subreddit-form" onSubmit={this.submitHandler}>
        <input placeholder='Create new subreddit' value={this.state.subreddit} onChange={this.changeHandler}/>
        <button type='submit'>Create</button>
      </form>
    );
  }
});

module.exports = SubRedditCreate;