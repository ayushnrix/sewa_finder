const express = require("express");
const { getAgents, postAgent } = require("../controllers/agentControllers");
const router = express.Router();



router.route("/").get(getAgents).post(postAgent)

module.exports = router