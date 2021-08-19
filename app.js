const express = require ("express");
const app = express();

const path = require ("path");

app.listen (4040, 
    console.log("Servidor funcionando")
);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

