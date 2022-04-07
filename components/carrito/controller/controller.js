const {exportarCarrito} = require('../../productos/controller/controller');
let carrito = exportarCarrito();

console.log(carrito);

function index(req, res){
    if (carrito.length === 0) {
        let numCarrito = (Math.random () * 10000).toFixed(0);
        res.status(200).render("indexCarrito", {numCarrito});
    }
    if (carrito.length > 0){
        res.status(200).render("productosCarrito", {carrito});
    }
};




module.exports ={index};