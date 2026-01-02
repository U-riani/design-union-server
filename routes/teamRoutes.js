// routes/teamRoutes.js
const express = require("express");
const {
  getTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} = require("../controllers/teamController");
const { handleImageUpload } = require("../middleware/imageMiddleware");

const router = express.Router();

router.get("/", getTeamMembers);
router.post("/", handleImageUpload, createTeamMember);
router.patch("/:id", handleImageUpload, updateTeamMember);
router.delete("/:id", deleteTeamMember);

module.exports = router;
