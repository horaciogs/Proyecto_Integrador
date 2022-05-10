//requiero la función Router del objeto express
const {Router} = require ('express');
const multer = require('multer');
const path = require('path');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const controllersAdmin = require('../controllers/controllersAdmin');
//requiero las validaciones del formulario
const validations = require('../middleware/middlewareProductCreateUpdate');

//*** Configura el storage (destination, filename) ***/
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer ({storage});

//realizo las renderizaciones del main
routes.get ("/adminProduct", controllersAdmin.product);
routes.get ("/productCreate", controllersAdmin.create);
routes.post('/productCreate', upload.single('img'), validations, controllersAdmin.save);
routes.get('/productDetail/:id', controllersAdmin.show);
routes.get('/productEdit/:id', controllersAdmin.edit);
routes.put('/productEdit/:id', upload.single('img'), validations, controllersAdmin.update);
routes.delete('/:id', controllersAdmin.erase);


module.exports = routes;