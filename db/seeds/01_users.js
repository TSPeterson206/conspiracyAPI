exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'toby', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 2, username: 'erin', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 3, username: 'hannah', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 4, username: 'allison', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK',},
    { id: 5, username: 'lael', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 6, username: 'molly', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 7, username: 'sarah', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 8, username: 'dan', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 9, username: 'emily', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 10, username: 'brad', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'}
  ])
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    })
}
