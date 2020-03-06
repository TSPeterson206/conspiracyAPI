exports.seed = function (knex, Promise) {
  return knex('verbs').insert([
    { id: 1, user_id:1,content:''},
    { id: 2, user_id:1,content:''},
    { id: 3, user_id:1,content:''},
    { id: 4, user_id:1,content:''},
    { id: 5, user_id:1,content:''},
    { id: 6, user_id:1,content:''},
    { id: 7, user_id:1,content:''},
    { id: 8, user_id:1,content:''},
    { id: 9, user_id:1,content:''},
    { id: 10, user_id:1,content:''},
    { id: 11, user_id:1,content:''},
    { id: 12, user_id:1,content:''}
  ])
    .then(() => {
      return knex.raw("SELECT setval('verbs_id_seq', (SELECT MAX(id) FROM verbs));")
    })
}
