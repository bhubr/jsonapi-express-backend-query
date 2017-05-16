const wrapper = require('./index')(require('./config').pgsql);

wrapper.query('select * from test.users')
.then(records => {
  console.log(records);
  process.exit();
})
.catch(err => {
  console.error(err);
  process.exit(1);
});