const Promise = require('bluebird');
const mysql   = require('mysql');

module.exports = function(config) {
  console.log(config);
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

//   const connection = mysql.createConnection({
//     host     : config.host,
//     user     : config.username,
//     password : config.password,
//     database : config.database
//   });

// connection.connect();
// const queryAsync = Promise.promisify(connection.query.bind(connection));


// var mysql = require('mysql');

// exports.getUsers = function(callback) {
//   pool.getConnection(function(err, connection) {
//     if(err) { 
//       console.log(err); 
//       callback(true); 
//       return; 
//     }
//     var sql = "SELECT id,name FROM users";
//     connection.query(sql, [], function(err, results) {
//       connection.release(); // always put connection back in pool after last query
//       if(err) { 
//         console.log(err); 
//         callback(true); 
//         return; 
//       }
//       callback(false, results);
//     });
//   });
// });