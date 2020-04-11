const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function getOneUser (userId) {
  return knex('users')
    .where({
      id: userId
      //possibly changed to username
    })
    .returning('*')
}

function getAllUsers () {
  return knex('users')
    .returning('*')
}

function signup (username, email, password) {
  console.log('hitting signup API')
  return knex('users')
    .where({
      username
    })
    .then(([data]) => {
      // if (data) {
      //   throw {
      //     status: 400,
      //     message: 'username already in use'
      //   }
      // }
      return bcrypt.hash(password, 8)
    })
    .then((hashedPW) => {
      return knex('users')
        .insert({
          username,
          email,
          password: hashedPW,
        })
        .returning('users.username')
    })
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
  deleteUser
}
