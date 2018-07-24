var express = require('express');
var router = express.Router();


router.get('/user', function(req, res, next ){
    res.render('view-user', { title: "InApp: Login" });
});

module.exports = router;