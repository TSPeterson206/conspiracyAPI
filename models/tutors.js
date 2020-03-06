const knex = require('../db/knex')

function getAllTutors () {
  return knex('tutors')
    .then(result => result)
}

function getOneTutor (tutorId) {
  return knex('tutors')
    .where({
      'tutors.id': tutorId
    })
    .returning('*')
    .then(result => result)
}

function deleteTutor (tutorId) {
  return knex('tutors')
    .where({
      'tutors.id': tutorId
    })
    .del()
    .returning('*')
    .then(result => result)
}

function addTutor (body) {
  return knex('tutors')
    .insert({
      tutorname: body.tutorname,
      password: body.password,
      tutorpic: body.tutorpic,
      rate: body.rate,
    })
    .returning('*')
}

function editTutor (tutorId, body) {
  return knex('tutors')
    .where({
      'tutors.id': tutorId
    })
    .update({
      tutorname:body.tutorname,
      password:body.password,
      tutorpic:body.tutorpic,
      rate:body.rate
    })
    .returning('*')
}

module.exports = {
  getAllTutors,
  getOneTutor,
  deleteTutor,
  addTutor,
  editTutor
}
