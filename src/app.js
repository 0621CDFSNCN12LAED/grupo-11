const express = require("express");
const app = express();

const path = require("path");

const mainRouters = require("./routers/mainRouters");

app.listen(3000, console.log("Servidor funcionando"));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "../public")));

/* Main */

app.use("/", mainRouters);

app.use("/service", mainRouters);

app.use("/associate", mainRouters);

app.use("/contact", mainRouters);

/* Products */

app.use("/detail", mainRouters);

app.use("/create", mainRouters);

app.use("/edit", mainRouters);

/* Users */

app.use("/register", mainRouters);

app.use("/login", mainRouters);

app.use("/cart", mainRouters);

/* Estos son para divir los controladores pero no funciona
const serviceRouters = require("./routers/serviceRouters");
const userRouters = require("./routers/userRouters");
*/
