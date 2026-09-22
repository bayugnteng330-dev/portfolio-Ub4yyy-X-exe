const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "arvexta",
    password: "arvexta123",
    database: "arvexta_portfolio",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = db.promise();