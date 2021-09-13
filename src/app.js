const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const mainRouters = require("./routers/mainRouters");
const serviceRouters = require("./routers/serviceRouters");
const userRouters = require("./routers/userRouters");

/* Abrir servidor */

app.listen(3000, console.log("Servidor funcionando"));

/* Configuracion */

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(methodOverride("_method"));

/* Rutas */

app.use("/", mainRouters);

app.use("/service", serviceRouters);

app.use("/users", userRouters);

/* Error 404 

app.use((req, res, next) => {
  res.status(404).send("error");
});
*/