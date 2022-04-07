const Productos = require('../../../public/productos');

let pantalones = Productos.filter( producto => producto.categoria === 'pantalon' );

let idGlobal = [];

let carrito = [];



function index(req, res){
    if (pantalones) res.status(200).render("index", {pantalones});
    return res.status(204).send('No se encontro ningun producto');
};

function find (req,res){
    let producto = pantalones.find(pantalon => pantalon.id === req.body.id);
    idGlobal.push(Number(req.body.id));
    if(producto){
        res.render("buscar", {producto})
    }else{
        res.render("error")
    }
};

function agregarScreen (req,res){
    res.render("agregar");
}
function updateScreen (req,res){
    res.render("actualizar");
}

function agregar (req,res){
    let producto = req.body
    let totalId = pantalones.map (x => parseInt( x.id));
    let num = Math.max(...totalId);
    newId = num +1;
    pantalones.push ({
        id: newId,
        url: producto.foto,
        categoria: 'pantalon',
        color: producto.color,
        titulo: producto.nombre,
        precio: producto.precio
    })
    return  res.status(200).render("index", {pantalones});
};

function deleteById(req,res){
    if(req.body.error) return res.status(500).send({error});
    let newPantalones = pantalones.filter(pantalon => pantalon.id != idGlobal[0]);
    return res.status(200).render("newindex", {newPantalones})
};

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    let producto = req.body
    posicion = Number(idGlobal[0] - 2001)
    pantalones[posicion].id = idGlobal[0];
    pantalones[posicion].url = producto.url;
    pantalones[posicion].categoria = 'pantalon';
    pantalones[posicion].color = producto.color;
    pantalones[posicion].titulo = producto.nombre;
    pantalones[posicion].precio = producto.precio;  
    return  res.status(200).render("index", {pantalones});
};

function agregado(req, res){
    if(req.body.error) return res.status(500).send({error});
    let newPantalones = pantalones.filter(pantalon => pantalon.id == idGlobal[0]);
    carrito.push(newPantalones[0]);
    return res.status(200).render("agregado", {newPantalones})
};
function exportarCarrito (carrito) {
    return carrito;
}
module.exports = { update, deleteById,index, find, agregar, agregarScreen, updateScreen, agregado, exportarCarrito };

