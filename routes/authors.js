const express = require('express');
const router = express.Router();
const authorsController = require ('../controllers/authorsController');


router.get('/', (req, res) => {return authorsController.getAuthors (req,res)});

router.get('/:authorid', (req, res) => {
  return authorsController.getAuthor (req,res)
});

router.post('/', async (req, res) => {
    return authorsController.postAuthor (req,res)
});

router.delete('/:authorid', (req, res) => {
  return authorsController.deleteAuthor (req,res);
});

module.exports = router
