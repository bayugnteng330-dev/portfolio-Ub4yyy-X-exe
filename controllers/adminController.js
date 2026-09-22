const bcrypt = require("bcryptjs");

const adminModel = require("../models/adminModel");
const projectModel = require("../models/projectModel");


// ===============================
// LOGIN PAGE
// ===============================

const loginPage = (req, res) => {

    if (req.session.admin) {

        return res.redirect("/admin");

    }

    res.render("admin/login", {
        error: null
    });

};


// ===============================
// LOGIN
// ===============================

const login = async (req, res) => {

    try {

        const { username, password } = req.body;

        if (!username || !password) {

            return res.render("admin/login", {
                error: "Username dan password wajib diisi."
            });

        }

        const admin =
            await adminModel.getByUsername(username);

        if (!admin) {

            return res.render("admin/login", {
                error: "Username atau password salah."
            });

        }

        const validPassword =
            await bcrypt.compare(
                password,
                admin.password
            );

        if (!validPassword) {

            return res.render("admin/login", {
                error: "Username atau password salah."
            });

        }

        req.session.admin = {
            id: admin.id,
            username: admin.username
        };

        res.redirect("/admin");

    } catch (error) {

        console.error("Login Error:", error);

        res.status(500).send(
            "Terjadi kesalahan saat login."
        );

    }

};


// ===============================
// DASHBOARD
// ===============================

const dashboard = async (req, res) => {

    try {

        const projects =
            await projectModel.getAll();

        res.render("admin/dashboard", {
            admin: req.session.admin,
            projects: projects
        });

    } catch (error) {

        console.error(
            "Dashboard Error:",
            error
        );

        res.status(500).send(
            "Gagal mengambil data dashboard."
        );

    }

};


// ===============================
// LOGOUT
// ===============================

const logout = (req, res) => {

    req.session.destroy(() => {

        res.redirect("/admin/login");

    });

};


module.exports = {
    loginPage,
    login,
    dashboard,
    logout
};