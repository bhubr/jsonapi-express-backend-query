const wrapper = require('./index')(require('./config').mysql);

wrapper.query('select * from users')
.then(records => {
  console.log(records);
  process.exit();
})
.catch(err => {
  console.error(err);
  process.exit(1);
});