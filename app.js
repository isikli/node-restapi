const express = require('express')
const { sequelize } = require('./models')
const bodyParser = require('body-parser')
const authors = require('./routes/authors')
const books = require('./routes/books')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/authors', authors)
app.use('/books', books)

sequelize.sync({
  force: true
})

module.exports = app
