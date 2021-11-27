const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const mainRouters = require("./routers/mainRouters");
const serviceRouters = require("./routers/serviceRouters");
const userRouters = require("./routers/userRouters");
const professionalsRouters = require("./routers/professionalsRouters");
const membershipsRouters = require("./routers/membershipsRouters");

/* Abrir servidor */

app.listen(3001, console.log("Servidor funcionando"));

/* Configuracion */

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(methodOverride("_method"));

/* Rutas */

app.use("/", mainRouters);

app.use("/service", serviceRouters);

app.use("/user", userRouters);

app.use("/professionals", professionalsRouters);

app.use("/memberships", membershipsRouters);

/* Error 404

app.use((req, res, next) => {
  res.status(404).send("error");
});
*/
