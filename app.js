const express = require('express');
const {sequelize} = require('./models');
const bodyParser = require('body-parser');
const authors = require('./routes/authors');
const books = require('./routes/books');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
console.log(`Example app listening on port ${port}!`)

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/authors', authors);
app.use('/books', books);

sequelize.sync({
    force: true
}).then (() => {
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}).catch(function(err) {
    // print the error details
    console.log(err);
});

module.exports = app;
