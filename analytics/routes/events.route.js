const express = require('express')
const eventsController = require('../controllers/events.controller')
const { query } = require('express-validator')

const router = express.Router()

router.get('/:id', [query('page').isNumeric(), query('limit').isNumeric()], eventsController.getUserEventsById)

module.exports = router 