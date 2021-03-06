var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Producto = require('../models').producto;
const Cliente = require('../models').cliente;
const Orden = require('../models').orden;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/productos', function(req, res, next) {
  Producto.findAll({
    attributes: { exclude: ["updatedAt"] }
  })
  .then(productos => {
      res.render('productos', { title: 'My Dashboard :: Productos', productos: productos });
  })
  .catch(error => res.status(400).send(error))
});

router.get('/clientes', function(req, res, next) {
  Cliente.findAll({
    attributes: { exclude: ["updatedAt"] }
  })
  .then(clientes => {
      res.render('clientes', { title: 'My Dashboard :: Clientes', clientes: clientes });
  })
  .catch(error => res.status(400).send(error))
});

router.get('/ordenes', function(req, res, next) {
  Orden.findAll({
    include: [{ model: Cliente }],
    attributes: { exclude: ["updatedAt"] }
  })
  .then(ordenes => {
      res.render('ordenes', { title: 'My Dashboard :: Ordenes', ordenes: ordenes });
  })
  .catch(error => res.status(400).send(error))
});



module.exports = router;
