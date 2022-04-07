
const express = require('express');
const {Router} = express;
const app = express();
const router = Router();;
const {config} = require('./config/config');
let path = require('path');

const Productos = require('./routes/productos');
const Carrito = require('./routes/carrito');


// Middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.set("views", path.join(__dirname, "views", "ejs"));
app.set('view engine', 'ejs');

app.use("/", Productos);
app.use("/carrito", Carrito);

app.listen(config.port,function(error){
    if(error) return console.log(error);
    console.log(`Servidor corriendo desde http://localhost:${config.port}`);
});

module.exports = {app}