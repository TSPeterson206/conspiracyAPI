const knex = require('../db/knex')

function getAllDescriptors () {
  return knex('descriptors')
    .then(result => result)
}

function getStockDescriptors () {
  return knex('descriptors')
    .then(result => result)
}

function getAllOwnDescriptors(nounId) {
  return knex('descriptors')
    .where({
      'descriptors.id': nounId
    })
    .returning('*')
    .then(result => result)
}

function getAllUserDescriptors(nounId) {
  return knex('descriptors')
    .where({
      'descriptors.id': nounId
    })
    .returning('*')
    .then(result => result)
}

function deleteDescriptor (nounId) {
  return knex('descriptors')
    .where({
      'descriptors.id': nounId
    })
    .del()
    .returning('*')
    .then(result => result)
}

function addDescriptor (body) {
  return knex('descriptors')
    .insert({
      userId: body.userId,
      content: body.content
    })
    .returning('*')
}

module.exports = {
  getAllDescriptors,
  getStockDescriptors,
  getAllOwnDescriptors,
  getAllUserDescriptors,
  deleteDescriptor,
  addDescriptor
}
