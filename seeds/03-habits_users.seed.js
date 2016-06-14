exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE habits_users_id_seq restart;').then(function() {
    return Promise.join(
      knex('habits_users').del(),
      knex('habits_users').insert({
        habit_id: 1,
        success: new Date('2016', '6', '6'),
      }),
      knex('habits_users').insert({
        habit_id: 1,
        success: new Date('2016', '8', '6'),
      }),
      knex('habits_users').insert({
        habit_id: 1,
        success: new Date('2016', '9', '6'),
      }),
      knex('habits_users').insert({
        habit_id: 2,
        success: new Date('2016', '5', '6'),
      }),
      knex('habits_users').insert({
        habit_id: 2,
        success: new Date('2016', '9', '6'),
      }),
      knex('habits_users').insert({
        habit_id: 1,
        success: new Date('2016', '9', '6'),
      }),
      knex('habits_users').insert({
        habit_id: 4,
        success: new Date('2016', '5', '6'),
      }),
      knex('habits_users').insert({
        habit_id: 4,
        success: new Date('2016', '6', '6'),
      }),
      knex('habits_users').insert({
        habit_id: 4,
        success: new Date('2016', '7', '6'),
      }),
      knex('habits_users').insert({
        habit_id: 4,
        success: new Date('2016', '8', '6'),
      }),
      knex('habits_users').insert({
        habit_id: 4,
        success: new Date('2016', '9', '6'),
      }),
      knex('habits_users').insert({
        habit_id: 4,
        success: new Date('2016', '10', '6'),
      })
    );
  })
}
