const knex = require('../db/knex')

function addOneTutorLocation (body) {
  return knex('tutors_locations')
    .insert({
      'tutor_id': body.tutor_id,
      'location_id': body.location_id
    })
    .returning('*')
    .then(result => result)
}

function getAllLocations () {
  return knex('locations')
  .returning('*')
}

function getOneTutorLocations (tutorId) {
  return knex('tutors_locations')
  .where({
    'tutors_locations.tutor_id': tutorId
  })
  .innerJoin('locations', 'locations.id', 'tutors_locations.location_id')
  .returning('*')
    .returning('*')
}

function deleteOneTutorLocation (tutorId,locationId) {
  return knex('tutors_locations')
    .where({
      'tutors_locations.tutor_id': tutorId,
      'tutors_locations.location_id': locationId
    })
    .del()
    .returning('*')
}

module.exports = {
  getAllLocations,
  getOneTutorLocations,
  deleteOneTutorLocation,
  addOneTutorLocation
}
