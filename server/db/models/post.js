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
  excerpt: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.body.slice(0, 100).concat('...')
    }
  },
  user: {
      type: Sequelize.STRING,
      allowNull: false
  },
  date: {
      type: Sequelize.DATE
  }
})

module.exports = Post

/**
 * instanceMethods
 */
Post.prototype.updateTime = function () {
  let date = Date.now();
  this.date = date;
}

Post.beforeCreate((post) => post.updateTime());
