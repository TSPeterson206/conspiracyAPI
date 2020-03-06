const knex = require('../db/knex')

function addOneTutorTechnologies (body) {
  console.log(body)
  return knex('tutors_technologies')
    .insert({
      // 'id': body.id,
      'tutor_id': body.tutor_id,
      'tech_id': body.tech_id
        })
    .returning('*')
    .then(result => result)
}

function getAllTechnologies () {
  return knex('technologies')
  .returning('*')
}

function getOneTutorTechnologies (tutorId) {
  return knex('tutors_technologies')
    .where({
      'tutors_technologies.tutor_id': tutorId
    })
    .innerJoin('technologies', 'technologies.id', 'tutors_technologies.tech_id')
    .returning('*')
    .then(result => result)
}

function deleteOneTutorTechnologies (
  // tutorId, 
  technologiesId) {
  return knex('tutors_technologies')
  .select('*')
    .where({
      // 'tutors_technologies.tutor_id': tutorId,
      'tutors_technologies.id': technologiesId
    })
    .del('*')
    .returning('*')
    .then(result => result)
}

module.exports = {
  getAllTechnologies,
  getOneTutorTechnologies, 
  deleteOneTutorTechnologies,
  addOneTutorTechnologies
}

// router.get('/', technologiesCtrl.getAllTechnologies)
// router.get('/:tutorId', technologiesCtrl.getOneTutorTechnologies)
// router.post('/:tutorId', technologiesCtrl.addOneTutorTechnologies)
// router.delete('/:tutorId/technologies/:technologiesId', technologiesCtrl.deleteOneTutorTechnologies)