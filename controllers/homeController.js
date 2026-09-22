const projectModel = require("../models/projectModel");

const home = async (req, res) => {
    try {
        const projects = await projectModel.getAll();

        res.render("home", {
            projects: projects,
            currentPage: "home"
        });

    } catch (error) {
        console.error(error);

        res.render("home", {
            projects: [],
            currentPage: "home"
        });
    }
};

module.exports = {
    home
};