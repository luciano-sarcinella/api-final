const express = require('express');
const ProductCtrl = require('../components/productos/controller/controller');

const Router = express.Router();

Router.get('/',ProductCtrl.index) // Muestra todos los productos
    .post('/buscar',ProductCtrl.find) //Busca un producto y lo muestra
    .get('/agregar',ProductCtrl.agregarScreen)
    .post('/producto',ProductCtrl.agregar ) // Crea un producto nuevo
    .get('/eliminar',ProductCtrl.deleteById ) //Actualiza un producto
    .get('/actualizar',ProductCtrl.updateScreen)
    .post('/productoAdd',ProductCtrl.update ) // Elimina un producto
    .get('/agregado',ProductCtrl.agregado); //Suma producto al carrito

module.exports = Router;

