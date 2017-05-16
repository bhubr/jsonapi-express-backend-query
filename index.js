
module.exports = function(config) {
  if(! config || ['mysql', 'pgsql', 'sqlite'].indexOf(config.dialect) === -1) {
    throw new Error("config object's dialect key should be one of (mysql|pgsql|sqlite) instead of " + config.dialect);
  }
  const { dialect } = config;
  delete config.dialect;
  return require('./lib/' + dialect)(config);
}