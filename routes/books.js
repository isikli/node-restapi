var express = require('express')
var Book = require('../models/Book')
var Author = require ('../models/Author')

var router = express.Router()

var getQueryObj = function (query) {
  queryToken = {};
  if (query.name){
    queryToken.name  = query.name;
  }
  if (query.id){
    queryToken.id  = query.id;
  }

  queryObj = {};
  queryObj.where = queryToken;
  queryObj.include = [ {model: Author, attributes:['firstName','lastName']} ];
  return queryObj;
};


router.get('/', (req, res) => {
  Book.findAll (getQueryObj (req.query)
).then (book => {return res.send(JSON.stringify(book, null, 4));})
});

router.get('/:bookid', (req, res) => {Book.findByPk (req.params.bookid).then (book => {return res.send("Result" + JSON.stringify(book, null, 4));})
});

router.post('/', async (req, res) => {
	const book = await Book.create(req.body);
	return res.send ({"id":book.id});
});

router.delete('/:bookid', (req, res) => {
  Book.destroy ({where : {id:req.params.bookid}}).then (()=>{return res.send('DELETE Successful')})
});

module.exports = router
