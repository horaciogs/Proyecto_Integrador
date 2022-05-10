const { create } = require('domain');
const express = require('express');
const fs = require('fs');
const path = require ("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
    product: (req , res) => {
        res.render('../views/admin/adminProduct', { products });
    }, 
    create: (req , res) => {
        res.render('../views/admin/productCreate');
    },
    show: (req,res) =>{
        let miProducto;
        products.forEach(producto => {
            if(producto.id == req.params.id){
                miProducto = producto;
            }
        });
        res.render(path.resolve(__dirname, '../views/admin/productDetail'), {miProducto})
    },
    save: (req,res) =>{
        let ultimoProducto = products.pop();
        products.push (ultimoProducto);

        let img
			if(req.file != undefined){
				img = "/images/products/" + req.file.filename
			} else {
				img = '/images/products/default-image.jpg'
			}

        let nuevoProducto = {
            id: ultimoProducto.id +1,
            /*nombre: req.body.nombre,
            categoria: req.body.categoria,
            subcategoria: req.body.subcategoria,
            precio: req.body.precio,
            precioAnterior: req.body.precioAnterior,
            detalle: req.body.detalle,
            img: "/images/products/" + req.file.filename,
            estado: req.body.estado   */
            ...req.body,
            img
        }
        products.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify( products, null , 2);
        fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), nuevoProductoGuardar);
        res.redirect('../admin/adminProduct');
    },
    edit: (req,res)=>{
        const modoId = req.params.id;
        let productoEditar = products.find( producto => producto.id == modoId);
        res.render (path.resolve(__dirname,'../views/admin/productEdit'), {productoEditar});
    },
    update: (req,res) =>{
        let id = req.params.id;
        let productToEdit = products.find (product => product.id == id)

        let img
        if (req.file != undefined){
            img = "/images/products/" + req.file.filename
        } else {
            img = "/images/products/default-image.jpg"
        }

        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            img
        };

        let newProducts = products.map (product => {
if (product.id == productToEdit.id){
return product = {...productToEdit};
}
return product;
        })

        fs.writeFileSync (productsFilePath, JSON.stringify (newProducts, null, ' '));
        res.redirect('/admin/adminProduct');
        /* req.body.id = req.params.id;
        req.body.img = req.file ? "/images/products/" + req.file.filename : req.body.oldImagen;
        let productosUpdate = products.map(producto =>{
            if(producto.id == req.body.id){
                return producto = req.body;
            }
            return producto;
        })
        let productoActualizar = JSON.stringify( productosUpdate , null , 2);
        fs.writeFileSync(path.resolve(__dirname,"../data/products.json" ), productoActualizar)
        res.redirect('/admin/adminProduct');*/
    },
    erase: (req,res) => {
        let cont = 1;
        let borrarProducto = products.filter(item => {
            return item.id!=req.params.id
            });
        borrarProducto.map(item => {
                return item.id=cont++;
            });
        let nuevoProductoGuardar = JSON.stringify( borrarProducto, null , 2);
        fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), nuevoProductoGuardar);
        res.redirect('../admin/adminProduct');
    }

};

module.exports = controllers;