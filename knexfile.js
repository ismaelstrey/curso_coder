// Update with your config settings.

module.exports = {
    client: 'postgresql',
    connection: {
      host: 'db_post',
      database: 'knowledge',
      user:     'teste',
      password: 'example'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    } 

};
