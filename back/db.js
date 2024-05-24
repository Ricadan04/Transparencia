// db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'devTransparenciaGobJal',
    password: 'rdzv04mar97',
    port: 5432,
});

module.exports = pool;