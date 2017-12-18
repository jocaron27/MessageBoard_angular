const User = require('./user');
const Post = require('./post');
const Reply = require('./reply');

//associations
User.hasMany(Post);
Post.hasMany(Reply);

module.exports = {
  User, Post, Reply
}
