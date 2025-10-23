 const express = require('express')
 const useController = require('../controllers/useController')
 const bookController = require('../controllers/bookController')
const jwtMiddleware = require('../middlewares/jwtMiddlewar')
const multerConfig = require('../middlewares/imageMulterMiddleware')

 const router = express.Router()

 //register
 router.post('/register',useController.registerController)

//login
 router.post('/login',useController.loginController)

 //Google-login
 router.post('/google-login',useController.googleLoginController)


 //addBook
router.post('/add-books',jwtMiddleware,multerConfig.array('uploadImages',3),bookController.addBookController)

//home-books
router.get('/home-books',bookController.getHomeBooksController)

//all-books
router.get('/all-books',jwtMiddleware,bookController.getAllBooksController)

//view-book
router.get('/books/:id/view',jwtMiddleware,bookController.viewBookController)

//get user books
router.get('/user-books',jwtMiddleware,bookController.getAllUserBookController)

//get user bought books
router.get('/user-bought-books',jwtMiddleware,bookController.getAllUserBoughtController)

//delete user books
router.get('/user-books/:id/remove',jwtMiddleware,bookController.deleteUserBookController)

 module.exports=router