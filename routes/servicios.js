var express = require('express');
var router = express.Router();

/* GET servicios listing. */
router.get('/', function(req, res, next) {
  res.render('servicios', { title: 'Servicios' });
});
/* GET servicios locales listing. */
router.get('/locales', function(req, res, next) {
  res.render('serviciosLocales', { title: 'Servicios Locales' });
});

module.exports = router;
