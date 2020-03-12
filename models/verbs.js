const knex = require('../db/knex')

function getAllVerbs () {
  return knex('verbs')
    .then(result => result)
}

function getStockVerbs () {
  return knex('verbs')
  .where({
    'verbs.user_id':1
  })
    .then(result => result)
}

function getAllOwnVerbs(user_id) {
  return knex('verbs')
    .where({
      'verbs.user_id': user_id
    })
    .returning('*')
    .then(result => result)
}

function getAllUserVerbs() {
  return knex('verbs')
    .whereNot({
      'verbs.user_id':1
    })
    .returning('*')
    .then(result => result)
}

function deleteNoun (verb_Id) {
  return knex('verbs')
    .where({
      'verbs.id': verb_Id
    })
    .del()
    .returning('*')
    .then(result => result)
}

function addNoun (body) {
  return knex('verbs')
    .insert({
      user_id: body.user_id,
      content: body.content
    })
    .returning('*')
}

module.exports = {
  getAllVerbs,
  getStockVerbs,
  getAllOwnVerbs,
  getAllUserVerbs,
  deleteNoun,
  addNoun
}
