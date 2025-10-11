//import dotenv express cors
//load e.nv file content into process env
require ('dotenv').config()
const express = require ('express')
const cors = require('cors')
const router = require('./routing/router')
//import 
require(`./db/connection`) 


//create server
const bookstoreServer = express()
//enable cors protocol in server app
bookstoreServer.use(cors()) 
bookstoreServer.use(express.json()) //parse json
bookstoreServer.use(router)

//create port 
const PORT = 3000

//run server port 
bookstoreServer.listen(PORT,()=>{
  console.log(`bookstore server started at PORT ${PORT},and waiting for clientrequest!!!`);
  
})
//resolving http request 
bookstoreServer.get('/',(req,res)=>{
 res.status(200).send("<h1 >bookstore server started</h1>")
})

bookstoreServer.post('/',(req,res)=>{
 res.status(200).send(`post request`)
})