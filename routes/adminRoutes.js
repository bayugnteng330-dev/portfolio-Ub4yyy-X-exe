const express = require("express");

const router = express.Router();

const adminController =
    require("../controllers/adminController");

const {
    requireAdmin
} = require("../middleware/authMiddleware");


// LOGIN

router.get(
    "/admin/login",
    adminController.loginPage
);

router.post(
    "/admin/login",
    adminController.login
);


// DASHBOARD

router.get(
    "/admin",
    requireAdmin,
    adminController.dashboard
);


// LOGOUT

router.get(
    "/admin/logout",
    requireAdmin,
    adminController.logout
);


module.exports = router;
