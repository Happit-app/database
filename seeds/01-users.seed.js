exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE users_id_seq restart with 1;').then(function() {
    return knex('users').del().then(function() {
      return Promise.join(
        //seed db
        knex('users').insert({
          id: 1,
          handle: 'GiulianaJoe',
          firstName: 'Giuliana',
          notify: true,
          media: false
        }),
        knex('users').insert({
          id: 2,
          handle: 'SonalNiko',
          firstName: 'Sonal',
          notify: true,
          media: false
        }),
        knex('users').insert({
          id: 3,
          handle: 'JulietCeres',
          firstName: 'Juliet',
          notify: true,
          media: false
        }),
        knex('users').insert({
          id: 4,
          handle: 'AnnekeRobert',
          firstName: 'Anneke',
          notify: true,
          media: false
        }),
        knex('users').insert({
          id: 5,
          handle: 'CarynHermione',
          firstName: 'Caryn',
          notify: false,
          media: false
        })
      );
    })
  })
}
