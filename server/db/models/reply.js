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
Reply.prototype.updateTime = function () {
  let date = Date.now();
  this.date = date;
}

Reply.beforeCreate((reply) => reply.updateTime());
