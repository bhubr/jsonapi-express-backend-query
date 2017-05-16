const Promise = require('bluebird');
const pg = require('pg');

// https://github.com/brianc/node-postgres
module.exports = function(config) {
  const pool = new pg.Pool(config);

  pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack);
  });


  function query(text, values) {
    // console.log('query:', text, values);
    const queryAsync = Promise.promisify(pool.query.bind(pool));
    return queryAsync(text, values);
  }

  return { query };
}
