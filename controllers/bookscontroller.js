const Book = require('../models/Book')
const Author = require('../models/Author')


var getQueryObj = function (query) {
  queryObj = {};
  queryObj.where = query;
  queryObj.include = [ {model: Author, attributes:['firstName','lastName']} ];
  return queryObj;
};


module.exports  = {
  getBooks: async (
    req, res
  ) => {
    const books = await Book.findAll (getQueryObj (req.query));
    return res.send(JSON.stringify(books, null, 4));
  },

  postBook: async (req,res) => {
      const book = await Book.create(req.body);
      return res.send ({"id":book.id});
  },

  getBook: async (req,res) => {
    const book = await Book.findByPk (req.params.bookid);
    return res.send("Result" + JSON.stringify(book, null, 4));
  },

  deleteBook: async (req,res) => {
    await Book.destroy ({where : {id:req.params.bookid}});
    return res.send('DELETE Successful');
  }
  }
