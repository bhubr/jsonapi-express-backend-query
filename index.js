
module.exports = function(config) {
  if(! config || ['mysql', 'pgsql'].indexOf(config.dialect) === -1) { // Leave sqlite for later, 'sqlite' |sqlite
    throw new Error("config object's dialect key should be one of (mysql|pgsql) instead of " + config.dialect);
  }
  const { dialect } = config;
  delete config.dialect;
  return require('./lib/' + dialect)(config);
}