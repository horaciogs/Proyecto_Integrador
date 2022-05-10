//requiero la función Router del objeto express
const {Router} = require ('express');
const multer = require('multer');
const path = require('path');

//guardo la función Router en la constante routes
const routes = Router();

//requiero los controladores
const controllersUsers = require('../controllers/controllersUsers');

//requiero el middleware para validaciones
const validations = require('../middleWares/middlewareUserRegValidation');

//*** Configura el storage (destination, filename) ***/
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.resolve(__dirname, '../../public/images/users'));
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
//variable upload con multer
var upload = multer ({storage});

//realizo las renderizaciones de users
routes.get ("/register", controllersUsers.register);
//tomo los datos de registro para uno nuevo con las validaciones
routes.post ("/register", upload.single('img'), validations, controllersUsers.processRegister);

routes.get ("/login", controllersUsers.login);

module.exports = routes;