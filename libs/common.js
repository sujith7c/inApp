/**
 * common lib helper functions
 *
 */
var url = require('url');
var common = {};

/**
 * 
 * @param {*} req  request 
 * @param {*} res 
 * @param {*} next 
 * Func to get the breadcrumb, this bread crumb can be passed to template
 */
common.getBreadCrumb = function(req, res, next) {
    //create Base Url
     var baseUrl = url.format(
            {
                protocol : req.protocol,
                host :  req.get('host'),
            }
     );
     //get the parts of url
     urlParts = url.parse(req.url).pathname.split('/').filter(Boolean);
     items = [];
     //Insert a home link as the url parts does'nt have 
     items.push({label: 'Home', url : baseUrl})
     //iterate till url parts length
     //l = urlParts.length;
     console.log(urlParts.length);
     for(i = 0, l = urlParts.length; i < l ; i++) {
        items.push(
            {
                label:  this.capitalise(urlParts[i].replace(/-/g,' ')),
                url:    url.resolve(baseUrl, urlParts.slice(0,i+1).join('/')),
            });
     }
     console.log(items);
     return items;
     
     next();
 }
 /**
  * 
  * @param {*} text 
  * @param {*} opt options array, if opt is empty capitalise all the char
  */
 common.capitalise = function(text,opt=Array){
    //action if text not empty
    
    //extract the first char  and make uppercase
    capitilised = text.charAt(0).toUpperCase() + text.slice(1);
    //join remaining

    return capitilised;
 }
module.exports = common;
