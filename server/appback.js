var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var path       = require('path'); //Para poder trabajar con directorios al concatenar con "__dirname"
//Since version 1.5.0, the "cookie-parser" middleware no longer needs to be used for this module to work.
var session    = require('express-session'); //Middleware module to manage sessions
var cookieParser = require('cookie-parser');


// Create the application.
var app = express();

//use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;

// Add Middleware necessary for REST API's.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//express-session
// * secret (required): This is the secret used to sign the session ID cookie.
// * rasave (optional): Forces the session to be saved back to the session store. Typically, you'll want false.
// * saveUninitialized (optional): Forces a session that is "uninitialized" to be saved to the store.
//                                (A session is uninitialized when it is new but not modified.)
app.use(session({
  secret: 'secretpromotores', 
  resave: false, 
  saveUninitialized: true
}));


// CORS Support (open the accesibility to every server to use our API, so everyone can access it)
app.use(function(req, res, next) {
  //res.header('Access-Control-Allow-Origin', '*'); // If you want to allow credentials then can't use 
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080'); //servidor app Angular

    var allowedOrigins = ['http://127.0.0.1:8080',
                          'http://localhost:8080',
                          'http://192.168.0.13:8080', 
                          'http://192.168.56.1:8080', 
                          'http://192.168.18.1:8080', 
                          'http://192.168.44.1:8080',
                          'http://127.0.0.1:4200', 
                          'http://localhost:4200'];

    var origin = req.headers.origin;

    if (allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    //make sure you set this parameter and make it true so that AngularJS and Express are able to exchange session values between each other 
    res.header("Access-Control-Allow-Credentials", "true");

    next();
});


// NOW THIS IS AN INDEPENDENT BACK-END App (the Angular app will run in another server)
//-------------------------------------------------------------------------------------
//This way we can run our AngularJS client code on the same express server (cross-origin wont be required if we follow this)
//app.use(express.static(path.join(__dirname, '../client'))); //Cargar todos los recursos que haya en el front-end

//Route to connect with Angular main page (entry point) 
/*
app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, '../client/index.html'));
});
*/


//Rutas
var apiPromo = require('./controllers/PromotorCtrl');
var apiAuth = require('./controllers/AutenticacionCtrl');


// Connect to MongoDB (mpromise 'mongoose's default promise library is deprecated) 
mongoose.Promise = global.Promise; //Use ES promise library (is not deprecated)

mongoose.connect('mongodb://localhost/obrasdb', {useMongoClient: true});

mongoose.connection.once('open', function() {
  
  // Load all the models
  app.models = require('./models/allmodels');

  app.use('/api', apiPromo);
  app.use('/auth', apiAuth);

  app.use('/', function(req, res, next) {
    res.send('Ha accedido al home de la aplicacion Node.js para gestionar Obras!');
  });
								
  console.log('Listening on port ' + port + '...');
  app.listen(port);
});