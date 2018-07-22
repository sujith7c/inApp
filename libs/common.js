/**
 * common lib helper functions
 *
 */
var url = require('url');
 var common = {};

 common.getBreadCrumb = function(req, res, next) {
     //create Base Url
     var baseUrl = url.format(
            {
                protocol : req.protocol,
                host :  req.get('host'),
            }
     );
     urlParts = url.parse(req.url).pathname.split('/');
     console.log(urlParts);
 }
module.exports = common;
