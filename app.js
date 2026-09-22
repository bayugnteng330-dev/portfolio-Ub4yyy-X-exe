const express = require("express");
const session = require("express-session");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static("public"));

app.use(
    session({
        secret: "arvexta-secret-2026",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 4
        }
    })
);


// ===============================
// ROUTES
// ===============================

const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");


// ===============================
// PUBLIC ROUTES
// ===============================

app.use("/", homeRoutes);
app.use("/", aboutRoutes);
app.use("/", projectRoutes);
app.use("/", contactRoutes);


// ===============================
// ADMIN ROUTES
// ===============================

app.use("/", adminRoutes);


// ===============================
// SERVER
// ===============================

const PORT = 3000;

app.listen(PORT, () => {

    console.log("================================");
    console.log(" ARVEXTA PORTFOLIO");
    console.log(" Server: http://localhost:" + PORT);
    console.log(" MVC Architecture Active");
    console.log("================================");

});