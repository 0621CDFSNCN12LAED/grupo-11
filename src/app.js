const express = require("express");
const app = express();

const path = require("path");

const mainRouters = ("./routers/mainRouters");

app.listen(3000, console.log("Servidor funcionando"));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRouters);

app.use("/service", mainRouters);

app.use("/register", mainRouters );

app.use("/login", mainRouters );



