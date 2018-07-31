 
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
router.get('/config/country/add', function(req, res, next) {
    res.render('location/country',{ 
        breadCrumb : common.getBreadCrumb(req, res),
        title: "New Location",
    });
});

//new Store  ops
router.get('/config/store/add', function(req, res, next) {
    res.render('location/newstore',
    { 
        title: "New Store",
        breadCrumb : common.getBreadCrumb(req, res),
    });
});

router.get('/config/assettype/add', function(req , res, next) {
    res.render('asset/assettype',
    { 
        title: "New Asset Type",
        breadCrumb : common.getBreadCrumb(req, res),
    });
    
});
/**
 * Asset Type list page 
 */
router.get('/config/assettype', function(req , res, next){
    res.render('asset/assetlist',
    { 
        title: "Asset List",
        breadCrumb : common.getBreadCrumb(req, res),        
    });
});

router.get('/brands/new/:id', function(req, res, next) {
    res.render('brands/view-brand-new', { title : "new brand form"});
});

//Add Company detail form router
router.get('/config/company/add', function(req , res, next) {
    res.render('company',
    { 
        title: "New Company",
        breadCrumb : common.getBreadCrumb(req, res),
    });
    
});


module.exports = router;