const express = require("express");
const app = express();
const path = require("path");

const mainRouters = require("./routers/mainRouters");
const serviceRouters = require("./routers/serviceRouters");
const userRouters = require("./routers/userRouters");

app.listen(3000, console.log("Servidor funcionando"));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "../public")));

/* Main */

app.use("/", mainRouters);

/* Products */

app.use("/", serviceRouters);

/* Users */

app.use("/", userRouters);
