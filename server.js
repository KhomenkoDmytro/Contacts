const app = require('./app');
const mongoose = require('mongoose');
// const { DB_HOST, PORT = 3000 } = process.env;
const DB_HOST =
  'mongodb://dmytr0:123454321@cluster0-shard-00-00.svtyy.mongodb.net:27017,cluster0-shard-00-01.svtyy.mongodb.net:27017,cluster0-shard-00-02.svtyy.mongodb.net:27017/?ssl=true&replicaSet=atlas-2ku9nx-shard-0&authSource=admin&retryWrites=true&w=majority';

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
