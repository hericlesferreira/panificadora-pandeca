var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var teste = 1;
  res.render('index', { title: 'Pandeca Panificadora' });
});

module.exports = router;
