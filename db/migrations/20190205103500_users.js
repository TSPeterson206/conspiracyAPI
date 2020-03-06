exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('username').notNullable().defaultsTo('')
    table.string('password').notNullable().defaultsTo('')
    table.string('profilepic').notNullable().defaultsTo('')
    table.integer('location').notNullable().references('locations.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
