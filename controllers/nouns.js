const model = require('../models/nouns')

function getAllNouns(req, res, next) {
  model.getAllNouns()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getStockNouns(req, res, next) {
  model.getStockNouns()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getAllOwnNouns(req, res, next) {
  console.log('hitting getallnouns controller', req.params)
  model.getAllOwnNouns(req.params.user_id)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getAllUserNouns(req, res, next) {
  model.getAllUserNouns()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function deleteNoun(req, res, next) {
  return model.deleteNoun(req.params.nounId)
    .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

function addNoun(req, res, next) {
  console.log('hitting addNoun controller');
  let {
    user_id,
    content
  } = req.body

  return model.addNoun(req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'error'
        })
      }
      res.status(201).send({
        user_id,
        content
      })
    })
    .catch(next)
}

module.exports = {
  getAllNouns,
  getStockNouns,
  getAllOwnNouns,
  getAllUserNouns,
  deleteNoun,
  addNoun
}