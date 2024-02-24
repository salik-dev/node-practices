const express = require("express");

// Import DB connections
require("./connectDB/conn");

// App imports
const app = require("./app");

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`node.js server is running on port: ${port}`);
});
