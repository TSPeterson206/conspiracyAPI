const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function getOneUser (userId) {
  return knex('users')
    .where({
      id: userId
    })
    .returning('*')
}

function signup (username, password, profilepic, location) {
  return knex('users')
    .where({
      username
    })
    .then(([data]) => {
      if (data) {
        throw {
          status: 400,
          message: 'username already in use'
        }
      }
      return bcrypt.hash(password, 10)
    })
    .then((hashedPW) => {
      return knex('users')
        .insert({
          username,
          password: hashedPW,
          profilepic,
          location
        })
        .returning('users.username')
    })
}

function getAllUsers () {
  return knex('users')
    .returning('*')
}

function editOneUser (userId, body) {
  return knex('users')
    .update({
      username:body.username,
      password:body.password,
      profilepic: body.profilepic,
      location:body.location,
    })
    .where({
      id: userId
    })
    .returning('*')
}

function deleteUser (userId) {
  return knex('users')
  .where({
    id:userId
  })
  .del()
  .returning('*')
}

module.exports = {
  signup,
  getOneUser,
  getAllUsers,
  editOneUser,
  deleteUser
}
