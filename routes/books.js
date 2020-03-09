const express = require('express')
const booksController = require('../controllers/bookscontroller')

const router = express.Router()

router.get('/', (req, res) => { return booksController.getBooks(req, res) })

router.get('/:bookid', (req, res) => { return booksController.getBook(req, res) })

router.post('/', (req, res) => { return booksController.postBook(req, res) })

router.delete('/:bookid', (req, res) => { return booksController.deleteBook(req, res) })

module.exports = router
