const model = require('../models/locations')

function addOneTutorLocation(req, res, next) {
  let {
    tutor_id,
    location_id
  } = req.body

  model.addOneTutorLocation(req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 500,
          message: 'error'
        })
      }
      res.status(201).send({
        tutor_id,
        location_id
      })
    })
    .catch(next)
}

function getOneTutorLocations(req, res, next) {
  model.getOneTutorLocations(req.params.tutorId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getAllLocations(req, res, next) {
  model.getAllLocations()
    .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

function deleteOneTutorLocation(req, res, next) {
  model.deleteOneTutorLocation(req.params.tutorId, req.params.locationId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

module.exports = {
  getAllLocations,
  getOneTutorLocations,
  deleteOneTutorLocation,
  addOneTutorLocation
}