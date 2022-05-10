const express = require ('express');
const fs = require('fs');
const path = require ("path");


const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
    index: (req , res) => {
        res.render('index', { products });
    },
    about: (req , res) => {
        res.render('about');
    },
    faqs: (req , res) => {
        res.render('faqs');
    },
    contactUs: (req , res) => {
        res.render('contact-us');
    }
}

module.exports = controllers;