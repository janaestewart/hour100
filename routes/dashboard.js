const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboard')
const upload = require('../middleware/multer')
const { ensureAuth } = require('../middleware/auth')

//Homepage
router.get('/', ensureAuth, dashboardController.getIndex)

//Profile Page
router.get('/profile', dashboardController.getProfile)

//New Post
router.post('/createPost', upload.single('file'), dashboardController.createPost)
// router.post('/createPost', dashboardController.createPost)

//Venue Page
// router.get('/venues', dashboardController.getVenues)

// Individual Post Page?
// router.get('/postId', dashboardController.getPostId)


//Delete Post
// router.delete('/deletePost', dashboardController.deletePost)

module.exports = router