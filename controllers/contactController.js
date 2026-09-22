function contact(req, res) {
    res.render("contact", {
        success: false,
        error: null
    });
}

function sendMessage(req, res) {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.render("contact", {
            success: false,
            error: "Semua field wajib diisi."
        });
    }

    console.log("================================");
    console.log("PESAN CONTACT BARU");
    console.log("Nama    :", name);
    console.log("Email   :", email);
    console.log("Pesan   :", message);
    console.log("================================");

    res.render("contact", {
        success: true,
        error: null
    });
}

module.exports = {
    contact,
    sendMessage
};