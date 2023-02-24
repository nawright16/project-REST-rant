const router = require('express').Router()
const places = require('../models/places')

// NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

// POST
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  
module.exports = router
