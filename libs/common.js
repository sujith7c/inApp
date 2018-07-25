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
     //get the url parts
     urlParts = url.parse(req.url, true).pathname.split('/');
     items = [];

     //Insert a home link as the url parts does'nt have 
     items.push({label: 'Home', url : baseUrl})
     //iterate till url parts length
     //l = urlParts.length;
     console.log(urlParts.length);
     for(i = 0, l = urlParts.length; i < l ; i++) {
        items.push(
            {
                label:  urlParts[i].replace(/-/g,' '),
                url:    url.resolve(baseUrl, urlParts.slice(0,i+1).join('/')),
            });
     }
     console.log(urlParts);
 }
module.exports = common;
