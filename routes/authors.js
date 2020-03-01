var express = require('express')
var router = express.Router()
var Author = require('../models/Author')
const { Op } = require("sequelize");


var getQueryObj = function (query) {
  queryToken = {};
  if (query.lastName){
    queryToken.lastName = {};
    queryToken.lastName [Op.like] = query.lastName+'%';
  }
  if (query.firstName){
    queryToken.firstName = {};
    queryToken.firstName [Op.like] = query.firstName+ '%';
  }
  if (query.id){
    queryToken.id  = query.id;
  }

  queryObj = {};
  queryObj.where = queryToken;
  console.log ("quertyObj " + queryObj);
  return queryObj;
};

router.get('/', (req, res) => {
  Author.findAll (getQueryObj (req.query)).then (author => {return res.send(JSON.stringify(author, null, 4));})
});

router.get('/:authorid', (req, res) => {
	Author.findByPk (
    		req.params.authorid
	).then (author => {return res.send("Result" + JSON.stringify(author, null, 4));
})
});

router.post('/', async (req, res) => {
const author = await	Author.create(req.body);
return res.send(author) ;
});

router.post('/', async (req, res) => {
	const book = await Book.create(req.body);
	return res.send ({"id":book.id});
});

router.delete('/:authorid', (req, res) => {
  Author.destroy ({where : {id:req.params.authorid}}).then (()=>{return res.send('DELETE Successful')})
});

module.exports = router
