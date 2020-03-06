exports.seed = function (knex, Promise) {
  return knex('locations').del()
    .then(() => {
      return knex('users').del()
    })
    .then(() => {
      return knex('tutors').del()
    })
    .then(() => {
      return knex('technologies').del()
    })
    .then(() => {
      return knex('tutors_locations').del()
    })
    .then(() => {
      return knex('tutors_technologies').del()
    })
    .then(() => {
      return knex('reviews').del()
    })
}
