const bcrypt = require("bcryptjs");
const db = require("../config/database");

async function createAdmin() {

    const username = "admin";
    const password = "admin123";

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
        "INSERT INTO admins (username, password) VALUES (?, ?)",
        [username, hashedPassword]
    );

    console.log("Admin berhasil dibuat.");
    console.log("Username :", username);
    console.log("Password :", password);

    process.exit();
}

createAdmin().catch(error => {

    console.error("Gagal membuat admin:", error);

    process.exit(1);

});