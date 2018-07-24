 
var express = require('express');
var router = express.Router();
var common = require('../libs/common.js');
var appSettings = require('../controllers/settingsController');


//configuration  settings routes
router.get('/config',function(req, res, next ){
    console.log(req.protocol),
    res.render('view-config', 
        { 
            title: "Config Page",
            entityList : appSettings.getEntityItems(),
            breadCrumb : common.getBreadCrumb(req, res),
        }
    );
});

router.get('/config/brands', function(req, res, next) {
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    res.render('brands/view-brands',
        { 
            title: "Add new Country",
            breadCrumb : common.getBreadCrumb(req, res),
        }
    );
});

//country or province ops
router.get('/country/add', function(req, res, next) {
    res.render('location/country',{ title: "New Location"});
});

//new Store  ops
router.get('/store/add', function(req, res, next) {
    res.render('location/newstore',{ title: "new Store"});
});

router.get('/assettype/add', common.getBreadCrumb, (req , res, next) => {
    res.render('asset/assettype',{ title: "New Asset Type"});
    
});
/**
 * Asset Type list page 
 */
router.get('/assettype', common.getBreadCrumb, (req , res, next) => {
    res.render('asset/assetlist',{ title: "Asset List"});
});

router.get('/brands/new/:id', function(req, res, next) {
    res.render('brands/view-brand-new', { title : "new brand form"});
});

module.exports = router;