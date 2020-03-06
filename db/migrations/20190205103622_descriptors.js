exports.up = function (knex, Promise) {
  return knex.schema.createTable('descriptors', table => {
    table.increments()
    table.integer('user_id').notNullable().defaultsTo(0).references('users.id').onDelete('CASCADE')
    table.string('content').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('descriptors')
}
