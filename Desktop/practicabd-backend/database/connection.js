const { Pool } = require('pg')
 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'estudiantesbd',
  password: '852456753jose',
  port: 5432,
})

module.exports = pool