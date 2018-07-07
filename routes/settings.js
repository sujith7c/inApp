 
var express = require('express');
var router = express.Router();
var common = require('../libs/common.js');

//configuration  settings routes

router.get('/', function(req, res, next ){
    res.render('view-config', { title: "Config Page" });
});

router.get('/brands', function(req, res, next) {
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    res.render('brands/view-brands',{ title: "Add new Country"});
});

//country or province ops
router.get('/country/add', function(req, res, next) {
    res.render('location/country',{ title: "New Location"});
});

//new Store  ops
router.get('/store/add', function(req, res, next) {
    res.render('location/newstore',{ title: "new Store"});
});

//new asset type ops
/*router.get('/assettype/add', getBreadCrumb(req, res, next) => {
    res.render('asset/assettype',{ title: "New Asset Type"}));
});
*/
router.get('/assettype/add', common.getBreadCrumb, (req , res, next) => {
    res.render('asset/assettype',{ title: "New Asset Type"});
    
});



router.get('/brands/new/:id', function(req, res, next) {
    res.render('brands/view-brand-new', { title : "new brand form"});
});

module.exports = router;