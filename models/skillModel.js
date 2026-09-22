const db = require("../config/database");

const getAll = async () => {
    const [rows] = await db.query(
        "SELECT * FROM skills ORDER BY level DESC"
    );

    return rows;
};

module.exports = {
    getAll
};
