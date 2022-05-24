const express = require('express');
const router = express.Router();
const categorysAPIController = require('../../controllers/api/categorysAPIController');

//Rutas
//Listado de todos los categorias
router.get('/', categorysAPIController.list);
//Detalle del categorias
router.get('/:id', categorysAPIController.detail);


module.exports = router;