const Author = require('./Author')
const Book = require('./Book')
const sequelize = require('./sequelize')

Book.belongsTo(Author)
Author.hasMany(Book, { onDelete: 'CASCADE' })

module.exports = { sequelize, Author, Book }
