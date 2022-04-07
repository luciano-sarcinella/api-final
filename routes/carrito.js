const express = require('express');
const ProductCtrl = require('../components/carrito/controller/controller');

const Router = express.Router();

Router.get('/',ProductCtrl.index) // Muestra todos los productos
    // .post('/buscar',ProductCtrl.find) //Busca un producto y lo muestra
    // .get('/agregado',ProductCtrl.agregadoScreen)
    // .post('/producto',ProductCtrl.agregar ) // Crea un producto nuevo
    // .get('/eliminar',ProductCtrl.deleteById ) //Actualiza un producto
    // .get('/actualizar',ProductCtrl.updateScreen)
    // .post('/productoAdd',ProductCtrl.update ); // Elimina un producto

module.exports = Router;
