const model = require('../models/technologies')

// router.get('/', technologiesCtrl.getAllTechnologies)
// router.get('/:tutorId', technologiesCtrl.getOneTutorTechnologies)
// router.post('/:tutorId', technologiesCtrl.addOneTutorTechnologies)
// router.delete('/:tutorId/technologies/:technologiesId', technologiesCtrl.deleteOneTutorTechnologies)

function getOneTutorTechnologies(req, res, next) {
  model.getOneTutorTechnologies(req.params.tutorId, req.params.technologiesId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getAllTechnologies(req, res, next) {
  model.getAllTechnologies()
    .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

function addOneTutorTechnologies(req, res, next) {
  let {
    tutor_id,
    tech_id
  } = req.body
  model.addOneTutorTechnologies(req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 500,
          message: 'error'
        })
      }
      res.status(201).send({
        tutor_id,
        tech_id
      })
    })
    .catch(next)
}

function deleteOneTutorTechnologies(req, res, next) {
  model.deleteOneTutorTechnologies(
    // req.params.tutorId, 
    req.params.technologiesId)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

module.exports = {
  getAllTechnologies,
  getOneTutorTechnologies,
  deleteOneTutorTechnologies,
  addOneTutorTechnologies
}