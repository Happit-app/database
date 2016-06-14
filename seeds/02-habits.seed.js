exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE habits_id_seq restart;').then(function() {
    return knex('habits').del().then(function() {
      return Promise.join(
        knex('habits').insert({
          user_id: 1,
          title: 'Include lonely guy at lunch',
          desc: 'Be friendlier',
          notify: true,
          time: '11:00:00',
          sun: false,
          mon: true,
          tue: true,
          wed: true,
          thu: true,
          fri: true,
          sat: false
        }),
        knex('habits').insert({
          user_id: 2,
          title: 'Run for 20 mins',
          desc: 'repair my smoker lungs',
          notify: true,
          time: '06:00:00',
          sun: true,
          mon: false,
          tue: true,
          wed: false,
          thu: true,
          fri: false,
          sat: true
        }),
        knex('habits').insert({
          user_id: 3,
          title: 'make cookies for grandchildren',
          desc: 'get them to visit',
          notify: true,
          time: '05:00:00',
          sun: true,
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false
        }),
        knex('habits').insert({
          user_id: 4,
          title: 'meditate',
          desc: 'at least 20 minutes',
          notify: true,
          time: '09:00:00',
          sun: true,
          mon: true,
          tue: true,
          wed: true,
          thu: true,
          fri: true,
          sat: true
        }),
        knex('habits').insert({
          user_id: 4,
          title: 'journal',
          desc: 'for anger relief',
          notify: true,
          time: '23:00:00',
          sun: true,
          mon: true,
          tue: true,
          wed: true,
          thu: true,
          fri: true,
          sat: true
        })
      );
    })
  })
}
