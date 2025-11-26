const mongoose = require("mongoose");

const agentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim : true
    },
    email: {
      type: String,
      required: [true, "Email is required."],
    },
    phone: {
      type: String,
    },
    service_category: {
      type: String,
    },
    skills: {
      type: String,
    },
    experience: {
      type: String,
      enum:[
        "1-3 years",
        "3-5 years",
        "5-7 years",
        "7-10 years",
        "10+ years"
      ]
    },
    location: {
      type: String,
    },
    price_range: {
      type: String,
    },
    agent_picture: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Agent", agentSchema);