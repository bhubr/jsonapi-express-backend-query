const Promise = require('bluebird');
const mysql   = require('mysql');

module.exports = function(config) {
  const pool = mysql.createPool(config);
  const getConnectionAsync = (Promise.promisify(pool.getConnection)).bind(pool);

  function query(sql) {
    return getConnectionAsync()
    .then(connection => {
      const queryAsync = Promise.promisify(connection.query.bind(connection));
      return queryAsync(sql);
    });
  }

  return { query };
}
