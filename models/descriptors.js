const knex = require('../db/knex')

function getAllDescriptors () {
  return knex('descriptors')
    .then(result => result)
}

function getStockDescriptors () {
  return knex('descriptors')
    .then(result => result)
}

function getAllOwnDescriptors(user_id) {
  return knex('descriptors')
    .where({
      'descriptors.user_id': user_id
    })
    .returning('*')
    .then(result => result)
}

function getAllUserDescriptors(descriptorId) {
  return knex('descriptors')
    .where({
      'descriptors.id': descriptorId
    })
    .returning('*')
    .then(result => result)
}

function deleteDescriptor (descriptorId) {
  return knex('descriptors')
    .where({
      'descriptors.id': descriptorId
    })
    .del()
    .returning('*')
    .then(result => result)
}

function addDescriptor (body) {
  return knex('descriptors')
    .insert({
      user_id: body.user_id,
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
