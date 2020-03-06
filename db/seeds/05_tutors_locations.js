exports.seed = function (knex, Promise) {
  return knex('tutors_locations').insert([
    { id: 1, tutor_id: 1, location_id: 1 },
    { id: 2, tutor_id: 1, location_id: 2 },
    { id: 3, tutor_id: 1, location_id: 3 },
    { id: 4, tutor_id: 1, location_id: 4 },
    { id: 5, tutor_id: 2, location_id: 1 },
    { id: 6, tutor_id: 2, location_id: 2 },
    { id: 7, tutor_id: 3, location_id: 3 },
    { id: 8, tutor_id: 4, location_id: 1 },
    { id: 9, tutor_id: 4, location_id: 2 },
    { id: 10, tutor_id: 4, location_id: 2 },
    { id: 11, tutor_id: 5, location_id: 1 },
    { id: 12, tutor_id: 5, location_id: 3 },
    { id: 13, tutor_id: 5, location_id: 1 },
    { id: 14, tutor_id: 6, location_id: 2 },
    { id: 15, tutor_id: 7, location_id: 4 },
    { id: 16, tutor_id: 7, location_id: 1 },
    { id: 17, tutor_id: 7, location_id: 1 },
    { id: 18, tutor_id: 8, location_id: 3 },
    { id: 19, tutor_id: 8, location_id: 1 },
    { id: 20, tutor_id: 9, location_id: 4 },
    { id: 21, tutor_id: 9, location_id: 1 },
    { id: 22, tutor_id: 10, location_id: 2 },
    { id: 23, tutor_id: 10, location_id: 1 },
    { id: 24, tutor_id: 10, location_id: 2 },
    { id: 25, tutor_id: 10, location_id: 1 },
    { id: 26, tutor_id: 11, location_id: 1 },
    { id: 27, tutor_id: 11, location_id: 4 },
    { id: 28, tutor_id: 12, location_id: 1 },
    { id: 29, tutor_id: 12, location_id: 2 },
    { id: 30, tutor_id: 12, location_id: 1 },
    { id: 31, tutor_id: 12, location_id: 2 }
  ])
    .then(() => {
      return knex.raw("SELECT setval('tutors_locations_id_seq', (SELECT MAX(id) FROM tutors_locations));")
    })
}
