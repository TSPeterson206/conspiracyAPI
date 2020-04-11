exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'toby', email:'upsin206@aol.com', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 2, username: 'erin', email:'erin@gmail.com', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 3, username: 'hannah', email:'hannah@gmail.com', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 4, username: 'allison', email:'allison@gmail.com', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK',},
    { id: 5, username: 'lael', email:'lael@gmail.com', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 6, username: 'molly', email:'molly@gmail.com', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 7, username: 'sarah', email:'sarah@gmail.com', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 8, username: 'dan', email:'dan@gmail.com', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 9, username: 'emily', email:'emily@gmail.com', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'},
    { id: 10, username: 'brad', email:'brad@gmail.com', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK'}
  ])
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    })
}
