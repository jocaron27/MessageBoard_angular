const Sequelize = require('sequelize')
const db = require('../db')

const Reply = db.define('reply', {
  text: {
    type: Sequelize.TEXT
  },
  user: {
      type: Sequelize.STRING,
      allowNull: false
  },
  date: {
      type: Sequelize.DATE
  }
})

module.exports = Reply

/**
 * instanceMethods
 */
Reply.prototype.updateTime = function (reply) {
  reply.time = Date.now();
}

Reply.beforeCreate((reply) => this.updateTime(reply));
