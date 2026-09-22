const projectModel = require("../models/projectModel");


// ===============================
// SEMUA PROJECT
// ===============================

const projects = async (req, res) => {

    try {

        const projects = await projectModel.getAll();

        res.render("projects", {
            projects: projects
        });

    } catch (error) {

        console.error("Project Error:", error);

        res.status(500).send(
            "Gagal mengambil data project."
        );

    }

};


// ===============================
// DETAIL PROJECT
// ===============================

const projectDetail = async (req, res) => {

    try {

        const id = req.params.id;

        const project =
            await projectModel.getById(id);

        if (!project) {

            return res.status(404).send(
                "Project tidak ditemukan."
            );

        }

        res.render("project-detail", {
            project: project
        });

    } catch (error) {

        console.error(
            "Project Detail Error:",
            error
        );

        res.status(500).send(
            "Gagal mengambil detail project."
        );

    }

};


// ===============================
// EXPORT
// ===============================

module.exports = {
    projects,
    projectDetail
};