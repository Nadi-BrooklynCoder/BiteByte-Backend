const express = require("express");
const cors = require("cors");
const vampsController = require('./controllers/vampsController');

const app = express()

app.use(express.json());
app.use(cors());
app.use('/vampires',vampsController);

app.get('/',(req,res)=>{
    res.send("Welcome to BiteBYTE")
});

app.get("*", (req, res) => {
    res.status(404).send("page not found");
});

module.exports = app;