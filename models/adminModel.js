const db = require("../config/database");

const getByUsername = async (username) => {

    const [rows] = await db.query(
        "SELECT * FROM admins WHERE username = ? LIMIT 1",
        [username]
    );

    return rows[0];

};

module.exports = {
    getByUsername
};