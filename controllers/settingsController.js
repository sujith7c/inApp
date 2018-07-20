var appSettings = {};
settingsArr = [];
appSettings.getEntityItems = function(req, res, next) {
    //we need to check from which page it being called
    //Array of configurable items in the App
    settingsArr['conf'] = [
        'Companay',
        'Asset Type',
        'Location',
        'Store',
        'Brand',
        'User',
        'Misc1',
        'Locale',
        'test1',
    ];
    settingsArr['columnCount'] = 2;
    //Calculate numbe for row and cloume in settings page
    if (parseInt(settingsArr['conf'].length / settingsArr['columnCount']) % settingsArr['columnCount'] == 0 ) {
        settingsArr['rowCount'] = settingsArr['conf'].length / settingsArr['columnCount'];
    }
    else {
        settingsArr['rowCount'] =  settingsArr['conf'].length / settingsArr['columnCount'] + 1;
    }
    settingsArr['items'] = _createSettings(settingsArr['conf'], settingsArr['rowCount'], settingsArr['columnCount']);
    console.log(settingsArr['items']);
    return settingsArr;

    next();
}
_createSettings = function(confArr, row, col) {
    retArr = [];
    end =0;
    start =0;
    for(i =0; i < row; ++i) {
        end+=2;
        retArr[i] = confArr.slice(start,end);
        start+=2;
    }
    return retArr;
}

module.exports = appSettings;
