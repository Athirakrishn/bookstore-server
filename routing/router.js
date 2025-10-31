const express = require('express')
const useController = require('../controllers/useController')
const bookController = require('../controllers/bookController')
const jwtMiddleware = require('../middlewares/jwtMiddlewar')
const multerConfig = require('../middlewares/imageMulterMiddleware')
const adminJwtMiddleware = require('../middlewares/adminJwtMiddleware')
const jobController =  require('../controllers/jobController')
const pdfMulterConfig = require('../middlewares/pdfMulterMiddleware')
const applicationController = require('../controllers/apploicationController')

const router = express.Router()
//Unauthorized User
//register
router.post('/register', useController.registerController)

//login
router.post('/login', useController.loginController)

//Google-login
router.post('/google-login', useController.googleLoginController)

//Authorized User

//addBook
router.post('/add-books', jwtMiddleware, multerConfig.array('uploadImages', 3), bookController.addBookController)

//home-books
router.get('/home-books', bookController.getHomeBooksController)

//all-books
router.get('/all-books', jwtMiddleware, bookController.getAllBooksController)

//view-book
router.get('/books/:id/view', jwtMiddleware, bookController.viewBookController)

//get user books
router.get('/user-books', jwtMiddleware, bookController.getAllUserBookController)

//get user bought books
router.get('/user-bought-books', jwtMiddleware, bookController.getAllUserBoughtController)

//delete user books
router.delete('/user-books/:id/remove', jwtMiddleware, bookController.deleteUserBookController)

// userprofile update
router.put('/user-profile/edit', jwtMiddleware,multerConfig.single('profile'), useController.userProfileEditController)

//add application
router.post('/application/add',jwtMiddleware,pdfMulterConfig.single('resume'),applicationController,applicationController.addApplicationController)


//admin 


router.get('/all-user',adminJwtMiddleware,useController.getAllUsersController)

//admin view user books
router.get('/admin-all-books',adminJwtMiddleware,bookController.getAllBooksAdminController)

//approve-book
router.put('/admin/book/approve', adminJwtMiddleware, bookController.updateBookStatusController);

//admin profile update
router.put('/admin-profile/edit',adminJwtMiddleware,multerConfig.single('profile'),useController.adminProfileEditController)


//get-jobs
router.get('/all-jobs',jobController.getAllJobController)

//add job
router.post('/add-job',adminJwtMiddleware,jobController.addJobController)
//remove job
router.delete('/job/:id/remove',adminJwtMiddleware,jobController.removeJobController)
//get application
router.get('/all-application',adminJwtMiddleware,applicationController.getApplicationController)

module.exports = router