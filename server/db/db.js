const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5433/messageboard', {
    logging: false
  }
)
module.exports = db
