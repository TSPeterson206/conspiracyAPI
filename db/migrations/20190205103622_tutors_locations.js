exports.up = function (knex, Promise) {
  return knex.schema.createTable('tutors_locations', table => {
    table.increments()
    table.integer('tutor_id').notNullable().defaultsTo(0).references('tutors.id').onDelete('CASCADE')
    table.integer('location_id').notNullable().defaultsTo(0).references('locations.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('tutors_locations')
}
