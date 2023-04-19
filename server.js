const mongoose = require('mongoose');

const app = require('./app');

// const DB_HOST = "mongodb+srv://Ilya:UWDHxMRQEB6t2S0f@cluster0.tkchcvp.mongodb.net/db-contacts?retryWrites=true&w=majority";

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST)
.then(() => {
  console.log("Database connection successful");
  app.listen(PORT);
})
.catch(error => {
  console.log(error.message);
  process.exit(1);
})


// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })