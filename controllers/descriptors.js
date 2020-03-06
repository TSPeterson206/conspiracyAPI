const model = require('../models/descriptors')

function getAllDescriptors(req, res, next) {
  model.getAllDescriptors()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getStockDescriptors(req, res, next) {
  model.getStockDescriptors()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getAllOwnDescriptors(req, res, next) {
  model.getAllOwnDescriptors()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getAllUserDescriptors(req, res, next) {
  model.getAllUserDescriptors()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function deleteDescriptor(req, res, next) {
  return model.deleteDescriptor(req.params.descriptorId)
    .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

function addDescriptor(req, res, next) {
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
  getAllDescriptors,
  getStockDescriptors,
  getAllOwnDescriptors,
  getAllUserDescriptors,
  deleteDescriptor,
  addDescriptor
}