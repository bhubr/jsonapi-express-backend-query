const Promise = require('bluebird');
const mysql     = require('promise-mysql');

module.exports = function(config) {
  const pool = mysql.createPool(config);

  function query(sql) {
    return pool.query(sql)
    .catch(err => {
      console.log('\n## ERROR on execution of mysql query:\n' + sql + '\nError', err);
      throw err;
    });
  }

  return { query };
}
