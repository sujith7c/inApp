/**
 * CustomHelper functions 
 */
var customHelpers = {};
customHelpers.forloop = function(n,block){
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;    
}
module.exports = customHelpers;