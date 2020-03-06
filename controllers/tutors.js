const model = require('../models/tutors')

function getAllTutors(req, res, next) {
  model.getAllTutors()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(next)
}

function getOneTutor(req, res, next) {
  model.getOneTutor(req.params.tutorId)
    .then((result) => {
      if (!result || result.length === 0) {
        return next({
          status: 404,
          message: 'tutor not found!'
        })
      }
      res.status(200).send(result)
    })
    .catch(next)
};

function deleteTutor(req, res, next) {
  return model.deleteTutor(req.params.tutorId)
    .then((result) =>
      res.status(200).send(result)
    )
    .catch(err => next(err))
}

function addTutor(req, res, next) {
  let {
    tutorname,
    password,
    tutorpic,
    rate
  } = req.body

  return model.addTutor(req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'error'
        })
      }
      res.status(201).send({
        tutorname,
        password,
        tutorpic,
        rate
      })
    })
    .catch(next)
}

function editTutor(req, res, next) {
  let {
    tutorname,
    password,
    tutorpic,
    rate
  } = req.body

  tutorname = tutorname || undefined
  password = password || undefined
  // location = location || undefined
  tutorpic = tutorpic || undefined
  rate = rate || undefined

  if (!tutorpic && !tutorname && !password && !rate) {
    return next({
      status: 400,
      message: 'No input provided'
    })
  }

  req.body = {
    tutorname,
    password,
    tutorpic,
    rate
  }

  return model.editTutor(req.params.tutorId, req.body)
    .then((result) => {
      if (!result) {
        return next({
          status: 404,
          message: 'account not found'
        })
      }
      res.status(201).send({
        tutorname,
        password,
        tutorpic,
        rate
      })
    })
}

module.exports = {
  getAllTutors,
  getOneTutor,
  deleteTutor,
  addTutor,
  editTutor
}