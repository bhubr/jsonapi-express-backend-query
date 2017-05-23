const Promise = require('bluebird');
const mysql     = require('promise-mysql');

module.exports = function(config) {
  const pool = mysql.createPool(config);

  function query(sql) {
    return pool.getConnection()
    .then(connection => (connection.query(sql)));
  }

  return { query };
}
