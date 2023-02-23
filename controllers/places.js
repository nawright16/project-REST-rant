const router = require('express').Router()

//GET /places
router.get('/', (req, res) => {
  
      
    res.render('places/index', {places})
})
  
module.exports = router
