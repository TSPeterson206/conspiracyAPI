exports.seed = function (knex, Promise) {
      return knex('users').del()
    .then(() => {
      return knex('nouns').del()
    })
    .then(() => {
      return knex('verbs').del()
    })
    .then(() => {
      return knex('descriptors').del()
    })
}
