var express = require('express');
var router = express.Router();

var artists = []

/* GET overview page. */
router.get('/', function(req, res, next) {

    res.render('overview')

});

/* Input of Artist */
router.post('/artistInput', function(req,res){

    artists.push(req.body['artist'])

    console.log(artists)

    res.redirect('/overview')
})

module.exports = router;
