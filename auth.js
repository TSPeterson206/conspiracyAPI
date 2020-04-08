const nJwt = require('njwt');
var config = require('./config');

function jwtAuth(req, res, next) {
  console.log('hitting auth', req.token)
  if (!req.token) {
    return res.status(403).send({ auth: false, message: 'No token provided' });
  }

  nJwt.verify(req.token, config.secret, function(err, decoded) {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Could not authenticate token' });
    }
    req.userId = decoded.body.id;
    next();
  });
}

module.exports = jwtAuth;