const knex = require('../db/knex')

function getAllVerbs () {
  return knex('verbs')
    .then(result => result)
}

function getStockVerbs () {
  return knex('verbs')
    .then(result => result)
}

function getAllOwnVerbs(nounId) {
  return knex('verbs')
    .where({
      'verbs.id': nounId
    })
    .returning('*')
    .then(result => result)
}

function getAllUserVerbs(nounId) {
  return knex('verbs')
    .where({
      'verbs.id': nounId
    })
    .returning('*')
    .then(result => result)
}

function deleteNoun (nounId) {
  return knex('verbs')
    .where({
      'verbs.id': nounId
    })
    .del()
    .returning('*')
    .then(result => result)
}

function addNoun (body) {
  return knex('verbs')
    .insert({
      userId: body.userId,
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
