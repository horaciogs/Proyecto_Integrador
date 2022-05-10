//requiero la función Router del objeto express
const {Router} = require ('express');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const controllersMain = require('../controllers/controllersMain');

//realizo las renderizaciones del main
routes.get ("/", controllersMain.index);
routes.get ("/about", controllersMain.about);
routes.get ("/faqs", controllersMain.faqs);
routes.get ("/contact-us", controllersMain.contactUs);


module.exports = routes;