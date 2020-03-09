const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const Author = sequelize.define('author', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  // options
})

module.exports = Author
