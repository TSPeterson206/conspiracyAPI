const usersModel = require('../models/users')
const cloudinary = require('cloudinary')

// LOGGER
const logger = require('../app')

//////

function signup (req, res, next) {
  const {
    username,
    password,
    profilepic,
    location
  } = req.body
  if (!username && !password) {
    return next({
      status: 400,
      message: 'Username and Password required for creating an account'
    })
  }
  return usersModel.signup(username, password, profilepic, location)
    .then(([data]) => {
      if (!data) {
        return next({
          status: 500,
          message: 'Something went wrong. Abandon all hope. The end is nigh friend.'
        })
      }
      next()
    })
    .catch(next)
}

function getOneUser (req, res, next) {
  return usersModel.getOneUser(req.params.userId)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'account not found'
        })
      }
      res.status(200).send(result)
    })
}

function getAllUsers (req, res, next) {
  console.log('hitting it')
  logger.info('hello there Tito')
  return usersModel.getAllUsers()
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'accounts not found'
        })
      }
      res.status(200).send(result)
    })
}

function editOneUser (req, res, next) {
  let {
    username,
        password,
        profilepic,
        location
  } = req.body

  username = username || undefined
  password = password || undefined
  location = location || undefined
  profilepic = profilepic || undefined

  if (!profilepic && !location) {
    return next({
      status: 400,
      message: 'No input provided'
    })
  }

  req.body = {
    username,
    password,
    profilepic,
    location
  }

  return usersModel.editOneUser(req.params.userId, req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'account not found'
        })
      }
      res.status(201).send({
        username,
        password,
        profilepic,
        location
      })
    })
}

function uploadImage (req, res, next) {
  let imageurl
  cloudinary.config({
    cloud_name: 'capstone',
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  })
  cloudinary.v2.uploader.upload(req.body.image, (err, result) => {
    if (err) {
      return next({
        status: 500,
        message: 'the cloud is just someones elses computer'
      })
    }
    imageurl = result.url
    res.status(201).send({
      image: result.url
    })
  })
  return imageurl
}

function deleteUser (req, res, next) {
  return usersModel.deleteUser(req.params.userId)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'account not found'
        })
      }
      res.status(200).send(result)
    })
}

module.exports = {
  signup,
  getOneUser,
  getAllUsers,
  editOneUser,
  uploadImage,
  deleteUser
}
