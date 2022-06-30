const app = require('./app');
const mongoose = require('mongoose');
// const { DB_HOST, PORT = 3000 } = process.env;
const DB_HOST =
  'mongodb+srv://dmytr0:123454321@cluster0.svtyy.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(3000);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
