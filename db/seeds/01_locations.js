exports.seed = function (knex, Promise) {
  return knex('locations').insert([
    { id: 1, name:'Seattle'},
    { id: 2, name:'Lynnwood'},
    { id: 3, name:'Olympia'},
    { id: 4, name:'San Francisco'}
  ])
    .then(() => {
      return knex.raw("SELECT setval('locations_id_seq', (SELECT MAX(id) FROM locations));")
    })
}
