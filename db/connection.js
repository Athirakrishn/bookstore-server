// const mongoose= require('mongoose')

// const connectionString = process.env.DECONECTIONSTRING

// mongoose.connect(connectionString).then(res=>{
//   console.log('bookstore db connected successfully');
  
// }).catch(err=>{
//   console.log('mongodb atlas connected failed');
//   console.log(err);
  
// })
const mongoose = require('mongoose')

const connectionstring = process.env.DECONNECTIONSTRING

mongoose.connect(connectionstring).then(res => {
    console.log("BookStore db connected successfully");
}).catch(err => {
    console.log("MongoDB Atlas connection failed");
    console.log(err);

})