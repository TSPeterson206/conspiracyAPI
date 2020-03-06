exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'toby', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', profilepic: 'https://tobypeterson.surge.sh/Toby_Peterson.png', location:1 },
    { id: 2, username: 'erin', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', profilepic: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', location:1 },
    { id: 3, username: 'hannah', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', profilepic: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', location:1},
    { id: 4, username: 'allison', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', profilepic: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', location:1},
    { id: 5, username: 'lael', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', profilepic: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', location:2},
    { id: 6, username: 'molly', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', profilepic: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', location:2},
    { id: 7, username: 'sarah', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', profilepic: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', location:3},
    { id: 8, username: 'dan', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', profilepic: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', location:3},
    { id: 9, username: 'emily', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', profilepic: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', location:4},
    { id: 10, username: 'brad', password: '$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', profilepic: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png', location:4}
  ])
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    })
}
