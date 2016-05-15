export default {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'dev',
    },
    migrations: {
      directory: './migrations',
      tableName: 'flamingos',
    },
    // seeds: {
    //   directory: './lib/seeders',
    // },
    debug: false, // set true for verbose database operations
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'bons-io',
      // user:     'username',
      // password: 'password'
    },
    pool: {
      min: 2,
      max: 4,
    },
    migrations: {
      tableName: 'flamingos',
    },
  },
};
