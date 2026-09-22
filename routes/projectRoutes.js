const express = require("express");

const router = express.Router();

const projectController = require("../controllers/projectController");


// ===============================
// DAFTAR PROJECT
// ===============================

router.get(
    "/projects",
    projectController.projects
);


// ===============================
// DETAIL PROJECT
// ===============================

router.get(
    "/projects/:id",
    projectController.projectDetail
);


module.exports = router;