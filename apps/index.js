const express = require("express");
const app = express();

require("./bootstrap")(app);
require("./routes")(app);
module.exports = app;
