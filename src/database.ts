const { createPool } = require('mysql2/promise');

const connection = createPool({
    port     : process.env.DB_PORT,
    host     : process.env.DB_HOST,
    database : process.env.DB_DATABASE,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSW,
    multipleStatements: true
}
);

export {connection};

