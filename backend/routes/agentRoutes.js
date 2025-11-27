const express = require("express");
const { getAgents, postAgent } = require("../controllers/agentControllers");
const upload = require("../middlewares/uploadMiddleware");
const router = express.Router();



router.route("/").get(getAgents).post(upload.single("agent_picture"), postAgent)

module.exports = router