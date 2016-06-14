// Update with your config settings.

require('dotenv').load();

module.exports = {

  development : {
    client: 'pg',
    connection: 'postgres://localhost/habitude'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
