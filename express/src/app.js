const express = require("express");
const app = express();
const path = require("path");

const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const recordameMiddleware = require("./middlewares/recordameMiddleware");

const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

/* Abrir servidor */

app.listen(3000, console.log("Servidor funcionando"));

/* Configuracion */

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(cookieParser());

app.use(
  session({
    secret: "Estas logeado",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(userLoggedMiddleware);

// Capturar datos y transformarlo a JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Para usar PUT y DELETE en formularios
app.use(methodOverride("_method"));

app.use(recordameMiddleware);

/* Rutas */

const mainRouters = require("./routers/mainRouters");
const serviceRouters = require("./routers/serviceRouters");
const userRouters = require("./routers/userRouters");

app.use("/", mainRouters);

app.use("/service", serviceRouters);

app.use("/user", userRouters);

/* Error 404 */

app.use((req, res, next) => {
  res.status(404).send("error no existe ese URL(404)");
});
