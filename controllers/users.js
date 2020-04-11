const usersModel = require('../models/users')

// LOGGER
const logger = require('../app')

//////

function signup (req, res, next) {
  console.log('hitting API signup controller')
  const {
    username,
    email,
    password
  } = req.body
  if (!username && !email && !password) {
    return next({
      status: 400,
      message: 'Username and Password required for creating an account'
    })
  }
  return usersModel.signup(username, email, password)
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

function getAllUsers(req, res, next) {
  return usersModel.getAllUsers()
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
  deleteUser
}
