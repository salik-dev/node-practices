const express = require("express");

const app = express();

app.listen(process.env.port, () => {
  console.log(`app is listening on port: ${process.env.port}`);
});
