const knex = require('../db/knex')

function getAllNouns () {
  return knex('nouns')
    .then(result => result)
}

function getStockNouns () {
  return knex('nouns')
  .where({
    'nouns.user_id':1
  })
    .then(result => result)
}

function getAllOwnNouns(user_id) {
  console.log('hitting getAllOwnNouns model', user_id);
  return knex('nouns')
  //.select('content')
    .where({
      'nouns.user_id': user_id
    })
    .returning('nouns.content')
    .then(result => result)
}

function getAllUserNouns(user_id) {
  console.log('hitting getAlluserNouns model', user_id);
  return knex('nouns')
    .whereNot({
      'nouns.user_id':1
    })
    .andWhereNot({'nouns.user_id':user_id})
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
