exports.seed = function (knex, Promise) {
  return knex('technologies').insert([
    { id: 1, name:'JavaScript', description:'A flexible coding language'},
    { id: 2, name:'C#', description:'Microsofts pride and joy'},
    { id: 3, name:'Java', description:'Old Faithful'},
    { id: 4, name:'Python', description:'The Few The Proud'},
    { id: 5, name:'HTML', description:'The bones of the house'},
    { id: 6, name:'CSS', description:'The wallpaper of the house'},
    { id: 7, name:'React', description:'Facebooks popular baby'},
    { id: 8, name:'Angular', description:'Hard to learn and tad less popular'},
    { id: 9, name:'Vue', description:'Who actually uses this?'},
    { id: 10, name:'Docker', description:'The one with the whale'},
    { id: 11, name:'Kubernetes', description:'Im out of jokes'},
    { id: 12, name:'Searching/Sorting', description:'You only need to know these for interviews'}
  ])
    .then(() => {
      return knex.raw("SELECT setval('technologies_id_seq', (SELECT MAX(id) FROM technologies));")
    })
}
