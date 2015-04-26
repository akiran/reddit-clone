var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'addSubReddit',
  'createPost',
  'upVote',
  'downVote',
]);

module.exports = Actions;
