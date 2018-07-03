
/*
*
* create and export configuration variables
*
*/


//Environment container //

var environments = {};

//Environment variables for staging

environments.staging = {
    'envName' : "staging",
    'port' : '4000',
};

//Environment variables for production 

environments.production  = {
    'envName' : "production",
    'port' : '5000'   
};

//set the environment passed to commandline

var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

//determine which environment to passs to commandline

var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

//expor the module

module.exports = environmentToExport;

