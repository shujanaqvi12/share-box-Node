/**
 * All api routes handles here
 * @author Shuja Naqvi
 */
const router = require("express").Router();

// Parent Routes
router.use("/users", require("./users")); // All the user routes
router.use("/auth", require("./auth")); // All the auth routes
router.use("/files", require("./files")); // All the files routes

// Export
module.exports = router;
