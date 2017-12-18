const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT
  },
  user: {
      type: Sequelize.STRING,
      allowNull: false
  },
  date: {
      type: Sequelize.DATE
  },
  comments: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  }
})

module.exports = Post

/**
 * instanceMethods
 */
Post.prototype.updateTime = function (post) {
  post.time = Date.now();
}

Post.beforeCreate((post) => this.updateTime(post));
