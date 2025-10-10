 const express = require('express')
 const useController = require('../controllers/useController')
 const router = express.Router()

 //register
 router.post('/register',useController.registerController)

 module.exports=router