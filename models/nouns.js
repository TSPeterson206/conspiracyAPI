const knex = require('../db/knex')

function getAllNouns () {
  return knex('nouns')
    .then(result => result)
}

function getStockNouns () {
  return knex('nouns')
    .then(result => result)
}

function getAllOwnNouns(nounId) {
  console.log('hitting getAllOwnNouns model', nounId);

  return knex('nouns')
    .where({
      'nouns.user_id': nounId
    })
    .returning('*')
    .then(result => result)
}

function getAllUserNouns(userId) {
  console.log('hitting getAlluserNouns model');
  return knex('nouns')
    .where({
      'nouns.user_id': userId
    })
    .returning('*')
    .then(result => result)
}

function deleteNoun (nounId) {
  return knex('nouns')
    .where({
      'nouns.id': nounId
    })
    .del()
    .returning('*')
    .then(result => result)
}

function addNoun (body) {
  return knex('nouns')
    .insert({
      user_id: body.user_id,
      content: body.content
    })
    .returning('*')
}

module.exports = {
  getAllNouns,
  getStockNouns,
  getAllOwnNouns,
  getAllUserNouns,
  deleteNoun,
  addNoun
}
