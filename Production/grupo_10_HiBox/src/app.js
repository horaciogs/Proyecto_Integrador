//requerimos el modulo de path
const path = require ("path");

//requerimos el modulo de express (terceros);
const express = require ("express");

// Pasar poder usar los métodos PUT y DELETE
const methodOverride =  require('method-override');

//requerimos express session
const session = require('express-session');

//adentro de app --> aplicacion express
const app = express(); 

//defino la ruta del middleware de usuario logueado
const middlewareUserLogged = require('./middleware/middlewareUserLogged');

//requerimos el middleware cokies
const cookies = require('cookie-parser');

//definimos el puerto una vez, para usarlo las veces necesarias
const port = 3030;

//requiero las rutas
const routesMain = require("./routes/routesMain");
const routesProduct = require("./routes/routesProduct");
const routesUsers = require("./routes/routesUsers");
const routesAdmin = require("./routes/routesAdmin");
//const routesPages = require("./routes/routesPages");

//definimos las constantes de path
const pathPublic = path.resolve(__dirname, "../public");
const pathEngineViews = path.resolve(__dirname, "./views");

//mediante use le asigno la carpeta "public" al proyecto para alojar todos los elementos estaticos (imagenes / css)
app.use(express.static(pathPublic));
//tomar los datos con querystring
app.use(express.urlencoded({ extended: false }));
// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride('_method'));
//llamo al middleware de cookies
app.use(cookies());
//aplico el middleware de session
app.use(session({secret: 'secret', resave: false, saveUninitialized: false}));
//llamo al middleware de usuario logueado
app.use(middlewareUserLogged);

//mediante set indico el Engine a utilizar y la carpeta de views
app.set('view engine', 'ejs');
app.set('views', pathEngineViews);

//funcion para ejecutar el servidor en un puerto especifico (+ callback)
app.listen (port, () =>{
    console.log ("Estoy escuchando en el puerto ", port)
});

app.use ('/', routesMain);
app.use ('/about', routesMain);
app.use ('/contact-us', routesMain);
app.use ('/faqs', routesMain);
app.use ('/users', routesUsers);
app.use ('/products', routesProduct);
app.use ('/admin', routesAdmin);

app.use((req,res,next) => {
    res.status(404).render('not-found')
});