const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const Book = sequelize.define('book', {
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  // options
})

module.exports = Book
