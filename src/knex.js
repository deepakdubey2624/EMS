import knex from 'knex';

export default knex = knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'root',
      database : 'ems',
      charset: 'utf8'
    },
    pool: { min: 0, max: 7 }
  });