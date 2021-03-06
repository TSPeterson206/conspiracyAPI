const model = require('../models/verbs')

function getAllVerbs(req, res, next) {
  model.getAllVerbs()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getStockVerbs(req, res, next) {
  model.getStockVerbs()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getAllOwnVerbs(req, res, next) {
  model.getAllOwnVerbs(req.params.user_id)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getAllUserVerbs(req, res, next) {
  model.getAllUserVerbs(req.params.user_id)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function deleteVerb(req, res, next) {
  console.log('hitting deleteverb controller', req.params.verbId)
  return model.deleteNoun(req.params.verbId)
    .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

function addVerb(req, res, next) {
  let {
    userId,
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
        userId,
        content
      })
    })
    .catch(next)
}

module.exports = {
  getAllVerbs,
  getStockVerbs,
  getAllOwnVerbs,
  getAllUserVerbs,
  deleteVerb,
  addVerb
}