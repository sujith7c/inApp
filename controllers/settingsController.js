/**
 *  Config page controller
 */
var appSettings = {};

settingsArr = [];
appSettings.getEntityItems = function(req, res, next) {
    //we need to check from which page it being called
    //Array of configurable items in the App
    settingObj = this.createConfigObj();
    console.log(settingObj);
    return settingObj;
    next();
}
/**
 * create an array of configurations links and labels
 * in rows and column to loop in side the template
 */
_createSettings = function(confArr, row, col) {
    retArr = [];
    end =0,start =0;
    for(i =0; i < row; ++i) {
        end+=2;
        retArr[i] = confArr.slice(start,end);
        start+=2;
    }
    return retArr;
}
/**
 * Calculate the number bs row in view based on config array items
 * @param config Array
 */
appSettings.getNumberOfRows  = function(confArr, noColumn) {
    //Calculate numbe for row and cloume in settings page
    if (parseInt(confArr.length / noColumn) % noColumn == 0 ) {
        numRows = confArr.length / noColumn;
    }
    else {
        numRows =  confArr.length / noColumn + 1;
    }
    return numRows;
}
/** 
 * Create config object
 * Object has below property
 * Url
 * Url Lable
 * Url Desc
 */
appSettings.createConfigObj = function() {
    var conf = new Object;
    conf.section = [
        {label  : 'Companay', url : '/config/company', desc : 'Add a company'},
        {label : 'Asset Type', url: 'config/assettype', desc : 'Add new asset type'},
        {label : 'Location', url: 'config/location', desc : 'Add new Location'},
        {label : 'Store', url: 'config/store', desc : 'Add new Store'},
        {label : 'Brand', url: 'config/brand', desc : 'Add new Brand'},
        {label : 'User', url: 'config/user', desc : 'Add new User'},
        {label : 'Misc', url: 'config/misc', desc : 'Add new Misc'},
        {label : 'Locale', url: 'config/locale', desc : 'Add new Locle'},                  
    ];
    conf.col = 2;
    conf.row = this.getNumberOfRows(conf.section, conf.col);
    conf.ele = _createSettings(conf.section, conf.row, conf.col);
    return conf;
}

module.exports = appSettings;
