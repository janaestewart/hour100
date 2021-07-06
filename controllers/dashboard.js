const Post = require('../models/Post')
const cloudinary = require('../middleware/cloudinary')

module.exports = {
  getProfile: async (req, res) => {
    try {
      const allPosts = await Post.find()

      res.render('./pages/profile.ejs', {
        userName: req.user.userName,
        email: req.user.email,
        posts: allPosts,
        user: req.user
      })
    } catch (err) {
      console.log(err)
    }
  },

  getIndex: async (req, res) => {
    try {
      const allPosts = await Post.find()

      res.render('./pages/dashboard.ejs', {
        // userName: req.user.userName,
        email: req.user.email,
        posts: allPosts,
        user: req.user
      })
    } catch (err) {
      console.log(err)
    }
  },

  createPost: async (req, res) => {
    try {
      // upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        user: req.user.id,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        camera: req.body.camera,
        lens: req.body.lens,
        venue: req.body.venue,
        aperture: req.body.aperture,
        iso: req.body.iso,
        artist: req.body.artist,
        comment: req.body.comment,
        rating: req.body.rating,
      })

      console.log('post on post')
      res.redirect('/')
    } catch (err) {
      console.log(err)
    }
  }

}