const usersModel = require('../models/users')

// LOGGER
const logger = require('../app')

//////

function signup (req, res, next) {
  const {
    username,
    password
  } = req.body
  if (!username && !password) {
    return next({
      status: 400,
      message: 'Username and Password required for creating an account'
    })
  }
  return usersModel.signup(username, password)
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
  deleteUser
}
