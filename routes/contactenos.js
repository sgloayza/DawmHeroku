var express = require('express');
var router = express.Router();

/* GET contactenos listing. */
router.get('/', function(req, res, next) {
  res.render('contactenos', { title: 'Contactenos' });
});

module.exports = router;
