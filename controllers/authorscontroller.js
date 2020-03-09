const Author = require('../models/Author')
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

module.exports = {

getAuthors : async (req,res) =>
{
    const authors = await Author.findAll (getQueryObj (req.query));
    return res.send(JSON.stringify(authors, null, 4));
},

getAuthor : async (req,res) =>
{
    const author = await Author.findByPk (req.params.authorid);
    return res.send(JSON.stringify(author, null, 4));
},

postAuthor : async (req,res) =>
{
  const author = await	Author.create(req.body);
  return res.send(author) ;
},

deleteAuthor : async (req,res) =>
{
  await Author.destroy ({where : {id:req.params.authorid}});
  return res.send('DELETE Successful');
}

}
