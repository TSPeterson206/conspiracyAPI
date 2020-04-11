const knex = require('../db/knex')
const bcrypt = require('bcrypt')

function login (username,email,password) {
  console.log('hitting login model')
  return knex('users')
    // .where({ username })
    .where({ email })

    .then(([data]) => {
      if (!data) throw { status: 400, message: `No user registered for ${username}` }
      return bcrypt.compare(password, data.password)
        .then((authStatus) => {
          if (!authStatus) throw { status: 401, message: 'Invalid password' }
          delete data.password
          console.log('login model data',data)
          return data
        })
    })
}

module.exports = { login }
