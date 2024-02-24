const mongoose = require("mongoose");

const connection = mongoose
  .connect(process.env.CONNECTION_STR)
  .then((msge) => {
    console.log("DB Connection Established");
    console.log(msge);
  });

module.exports = connection
