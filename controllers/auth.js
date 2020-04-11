const authModel = require('../models/auth')
const jwt = require('jsonwebtoken')

function login (req, res, next) {
  console.log('hitting controller login');
  const { username, email, password } = req.body

  if (!username && !email && !password) return next({ status: 400, message: 'Error with username or password' })
  return authModel.login(username, email, password)
    .then((result) => {
      const payload = { exp: (Date.now() / 1000) + 7200, sub: result }
      const token = jwt.sign(payload, process.env.SECRET)
      res.status(200).send({ token,auth:true,username:username })
    })
    .catch(next)
}

function authenticate (req, res, next) {
  console.log('hitting controller authenticate');
  if (!req.headers.authorization) { return next({ status: 401, message: 'Authentication Failed' }) }

  const [bearer, token] = req.headers.authorization.split(' ')

  jwt.verify(token, process.env.SECRET, (err, payload) => {
    if (err) return next({ status: 401, message: 'Unauthorized, token not confirmed' })
    req.claim = payload
    next()
  })
}

function authStatus (req, res, next) {
  console.log('hitting controller authstatus');
  res.status(200).send({ id: req.claim.sub.id, username: req.claim.sub.username })
}

function checkRequest (req, res, next) {
  const id = req.params.userId
  if (+id !== req.claim.sub.id) return next({ status: 401, message: 'Unauthorized, ids dont match' })
  next()
}

module.exports = {
  login, authenticate, authStatus, checkRequest
}
