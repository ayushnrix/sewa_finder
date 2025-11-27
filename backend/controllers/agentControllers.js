const agentModel = require("../models/agentModel");

const getAgents = async (req, res) => {
  try {
    const agents = await agentModel.find();
    res.status(200).json({
      success: true,
      message: "Agents Fetched Successfully",
      agents: agents,
    });
  } catch (err) {
    console.log("❌" + err);

    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

const postAgent = async (req, res) => {
  try {
    const agent = await agentModel.create({...req.body,

      agent_picture: req.file.filename
    });

    res.status(200).json({
      success: true,
      message: "Agent Added Successfully"
    });
  } catch (err) {
    console.log("❌" + err);
  }
};

module.exports = { getAgents, postAgent };
