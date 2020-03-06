exports.up = function (knex, Promise) {
  return knex.schema.createTable('technologies', table => {
    table.increments()
    table.string('name')
    table.string('description')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('technologies')
}
