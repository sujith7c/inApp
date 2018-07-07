/**
 * common lib helper functions
 *
 */

 var common = {};

 common.getBreadCrumb = function(req, res, next) {
     const urls = req.originalUrl.split('/');
     urls.shift();      
     req.breadcrumbs = urls.map((url, i) => {
         return {
             breadcrumbName : (url == '' ? 'Home' : url.charAt(0).toUpperCase() +  url.slice(1)),
             breadcrumbUrl: (urls.slice(0, i + 1).join('/')),
         };
     });
     console.log(req.breadcrumbs);
     console.log(urls);
     next();
 }

module.exports = common;
