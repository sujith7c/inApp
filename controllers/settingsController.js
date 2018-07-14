var appSettings = {};
settingsArr = [];
appSettings.getEntityItems = function(req, res, next) {
    //we need to check from which page it being called
    //Array of configurable items in the App
    settingsArr['items'] = [
        'Companay',
        'Asset Type',
        'Location',
        'Store',
        'Brand',
        'User',
    ];
    settingsArr['columnCount'] = 2;
    //Calculate numbe for row and cloume in settings page
    if (parseInt(settingsArr['items'].length / settingsArr['columnCount']) % settingsArr['columnCount'] == 0 ) {
        settingsArr['rowCount'] = settingsArr['items'].length / settingsArr['columnCount'];
    }
    else {
        settingsArr['rowCount'] =  settingsArr['items'].length / settingsArr['columnCount'] + 1;
    }
    return settingsArr;

    next();
}
module.exports = appSettings;
