const express = require('express');
const vampires = express.Router();
const  {getAllVampires, getOneVampire, updateVampireInformation, createVampire, deleteVampire}  = require('../queries/vamp');


// http:localhost3333/vampires
vampires.get("/", async (req, res) => {
    const allVampires = await getAllVampires();
    if (allVampires[0]) {
        res.status(200).json(allVampires);
    } else {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

vampires.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const oneVampire = await getOneVampire(id);
    if(oneVampire.id){
        res.status(200).json(oneVampire);
    }else{
        res.status(404).json({error: "Vampire Can Not Be Found"});
    }
})

vampires.post("/", async (req ,res) => {
    const newVampire = await createVampire(req.body);

    res.status(201).json(newVampire)
})

vampires.delete("/:id", async (req, res) => {
    const { id } = req.params
    const killedVampire = await deleteVampire(id)
    
    if(killedVampire.id) {
        res.status(200).json({ message: "Vampire turned into dust." })
    } else {
        res.status(404).json( {error: "Vampire escaped." })
    }
})

vampires.put('/:id', async (req,res)=>{
    const newInfo = req.body;
    const { id } = req.params;
    const updateVampireInfo = await updateVampireInformation(id, newInfo);
    if(updateVampireInfo.id){
        res.status(200).json(updateVampireInfo);
        // res.status(200).json({ message: "Vampire information updated successfully" });

    }else{
        res.status(404).json({ error: "Vampire Can Not Be Found" });
    }
})

module.exports = vampires;