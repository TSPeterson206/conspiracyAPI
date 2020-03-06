exports.up = function (knex, Promise) {
  return knex.schema.createTable('tutors_technologies', table => {
    table.increments()
    table.integer('tutor_id').notNullable().defaultsTo(0).references('tutors.id').onDelete('CASCADE')
    table.integer('tech_id').notNullable().defaultsTo(0).references('technologies.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('tutors_technologies')
}
