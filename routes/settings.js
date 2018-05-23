 
var express = require('express');
var router = express.Router();

//configuration  settings routes

router.get('/', function(req, res, next ){
    res.render('view-config', { title: "Config Page" });
});

router.get('/brands', function(req, res, next) {
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    res.render('brands/view-brands',{ title: "test"});
});

router.get('/brands/new/:id', function(req, res, next) {
    res.render('brands/view-brand-new', { title : "new brand form"});
});

module.exports = router;