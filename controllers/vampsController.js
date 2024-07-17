const express = require('express')
const vampires = express.Router()
const  getAllVampires  = require('../queries/vamp')


// http:localhost3333/vampires
vampires.get("/", async (req, res) => {
    const allVampires = await getAllVampires()
    if (allVampires[0]) {
        res.status(200).json(allVampires)
    } else {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

module.exports = vampires;