exports.seed = function (knex, Promise) {
  return knex('tutors').insert([
    { id: 1, tutorname:'Ringo', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:50},
    { id: 2, tutorname:'Paul', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:65},
    { id: 3, tutorname:'John', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:70},
    { id: 4, tutorname:'George', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:35},
    { id: 5, tutorname:'Peter', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:40},
    { id: 6, tutorname:'Ian', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:45},
    { id: 7, tutorname:'Bernard', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:55},
    { id: 8, tutorname:'Stephen', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:50},
    { id: 9, tutorname:'Homer', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:60},
    { id: 10, tutorname:'Marge', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:70},
    { id: 11, tutorname:'Bart', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:40},
    { id: 12, tutorname:'Lisa', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tutorpic:'', rate:45}
  ])
    .then(() => {
      return knex.raw("SELECT setval('tutors_id_seq', (SELECT MAX(id) FROM tutors));")
    })
}
