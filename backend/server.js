const express = require("express");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

// Middleware
app.use(express.json());




app.use("/api/agents", require("./routes/agentRoutes"))

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
