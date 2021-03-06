const knex = require('../db/knex')

function getAllDescriptors () {
  return knex('descriptors')
    .then(result => result)
}

function getStockDescriptors () {
  return knex('descriptors')
  .where({
    'descriptors.user_id':1
  })
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

function getAllUserDescriptors(user_id) {
  return knex('descriptors')
    .whereNot({
      'descriptors.user_id':1
    })
    .andWhereNot({'descriptors.user_id':user_id})
    .returning('*')
    .then(result => result)
}

function deleteDescriptor (descriptorId) {
  console.log('hitting deletedescriptor model', descriptorId)
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
