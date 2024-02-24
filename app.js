// Express imports
const express = require("express");

const app = express();

// Imports routers
const uploadRouter = require("./Routes/uploadRoutes");

app.use("/cabapi/v1/uploads", uploadRouter);

module.exports = app;
