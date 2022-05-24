//requiero la función Router del objeto express
const {Router} = require ('express');
const multer = require('multer');
const path = require('path');

//guardo la función Router en la constante routes
const routes = Router();


//requiero los controladores
const controllersProduct = require('../controllers/controllersProduct');

//realizo las renderizaciones de products
routes.get ("/", controllersProduct.index);
routes.get ("/filter", controllersProduct.indexFormulario);
routes.get('/productDetail/:id', controllersProduct.show);
routes.get ("/productCart", controllersProduct.cart);
routes.post ("/productCart/:id", controllersProduct.cartAddItem);
routes.get ("/gastronomia", controllersProduct.listarGastronomia);
routes.get ("/entretenimiento", controllersProduct.listarEntretenimiento);
routes.get ("/aventura", controllersProduct.listarAventura);
routes.delete('/productCart/:id', controllersProduct.eraseCart);
routes.delete('/productCart/delete', controllersProduct.eraseCartAll);

module.exports = routes;