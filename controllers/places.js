const router = require('express').Router()
const places = require('../models/places')

// NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

//GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

module.exports = router
