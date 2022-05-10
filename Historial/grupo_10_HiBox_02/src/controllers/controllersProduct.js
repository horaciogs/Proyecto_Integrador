const express = require('express');
const fs = require('fs');
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
    index: (req , res) => {
        res.render('../views/products/products', { products });
    },

    show: (req,res) =>{
        let miProducto;
        products.forEach(producto => {
            if(producto.id == req.params.id){
                miProducto = producto;
            }
        });
        res.render(path.resolve(__dirname, '../views/products/productDetail'), { products , miProducto })
    },

    cart: (req , res) => {
        res.render('../views/products/productCart', { products });
    },
}

module.exports = controllers;