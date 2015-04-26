var React = require('react');
var Reflux = require('reflux');
var { Route, DefaultRoute, run, HistoryLocation, RouteHandler } = require('react-router');
var Header = require('./components/Header');
var SideBar = require('./components/SideBar');
var SubRedditCreate = require('./components/SubRedditCreate');
var PostList = require('./components/PostList');
var PostCreate = require('./components/PostCreate');
var Store = require('./store');

var App = React.createClass({
  mixins: [Reflux.connect(Store)],
  render: function () {
    return (
      <div>
        <Header subreddits={this.state.subreddits} />
        <div className='container'>
          <div className='content'>
            <RouteHandler {...this.state} />
          </div>
          <SideBar />
        </div>
      </div>
    );
  }
});


var routes = (
  <Route handler={App}>
    <Route name='subreddit-create' path='/subreddits/create' handler={SubRedditCreate} />
    <Route name='post-create' path='/submit' handler={PostCreate} />
    <Route name='subreddit' path='/r/:subreddit' handler={PostList} />
    <DefaultRoute handler={PostList} />
  </Route>
)

run(routes, HistoryLocation, function (Handler) {
  React.render(<Handler />, document.getElementById('rapp'));
}) 

