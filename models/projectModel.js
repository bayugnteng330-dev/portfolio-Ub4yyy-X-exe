const db = require("../config/database");

const getAll = async () => {

    const [rows] = await db.query(
        "SELECT * FROM projects ORDER BY id DESC"
    );

    return rows;
};


const getById = async (id) => {

    const [rows] = await db.query(
        "SELECT * FROM projects WHERE id = ?",
        [id]
    );

    return rows[0];
};


module.exports = {
    getAll,
    getById
};