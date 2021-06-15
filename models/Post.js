const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image:{
    type: String,
    required: true,
  },
  cloudinaryId:{
    type: String,
    required: true,
  },
  camera:{
    type: String,
    required: true,
  },
  lens:{
    type: String,
    required: true
  },
  venue:{
    type: String,
    required: true
  },
  aperture:{
    type: String,
    required: true
  },
  iso:{
    type: String,
    required: true
  },
  artist:{
    type: String,
    required: true
  },
  comment:{
    type: String,
    required: true
  },
  rating:{
    type: Number,
    required: true
  }
})
module.exports = mongoose.model('Post', PostSchema)

//   postMessage: {
//     type: String,
//     required: true,
//   },
//   userId: {
//     type: String,
//     required: true,
//   },
//   userName: {
//     type: String,
//     required: true
//   },
//   likes: {
//     type: Number,
//     required: true
//   },
//   image: {
//     type: String,
//   }
// })