exports.up = function (knex, Promise) {
  return knex.schema.createTable('tutors', table => {
    table.increments()
    table.string('tutorname').notNullable().defaultsTo('')
    table.string('password').notNullable().defaultsTo('')
    table.string('tutorpic').notNullable().defaultsTo('')
    table.integer('rate').notNullable().defaultsTo(0)
    // table.string('location').references('tutors_locations.id').notNullable().defaultsTo('').onDelete('CASCADE')
    // table.string('technologies').references('tutors_technologies.id').notNullable().defaultsTo('').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('tutors')
}
