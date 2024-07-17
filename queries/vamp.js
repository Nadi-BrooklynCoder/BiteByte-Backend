const db = require('../db/dbConfig')


const getAllVampires = async () => {
    try {
        const allVamps = await db.any("SELECT * FROM vampires")
        return allVamps
    } catch (error) {
        return error
    }
}

const getOneVampire = async (id) => {
    try {
        const oneVamp = await db.one("SELECT * FROM vampires WHERE id=$1", id)
        return oneVamp
    } catch (error) {
        return error
    }
}

const createVampire = async (vamp) => {
    try {
        const newVamp = await db.one(
            "INSERT INTO vampires (name, date_turned, location, age, main_diet, power, is_dangerous, date_documented) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", 
            [
                vamp.name, 
                vamp.date_turned, 
                vamp.location, 
                vamp.age, 
                vamp.main_diet, 
                vamp.power, 
                vamp.is_dangerous, 
                vamp.date_documented
            ]
        )
        return newVamp
    } catch (error) {
        return error  
    }
}

const deleteVampire = async (id) => {
    try {
        const killedVamp = await db.one("DELETE FROM vampires WHERE id=$1 RETURNING *", id)
        return killedVamp
    } catch (error) {
        return error
    }
}

const updateVampireInformation = async (id, newInfo) => {
    try {
        const updatedInfo = await db.one(
            "UPDATE vampires SET name=$1, date_turned=$2, location=$3, age=$4, main_diet=$5, power=$6, is_dangerous=$7, date_documented=$8 WHERE id=$9 RETURNING *",
            [
                newInfo.name,
                newInfo.date_turned,
                newInfo.location,
                newInfo.age,
                newInfo.main_diet,
                newInfo.power,
                newInfo.is_dangerous,
                newInfo.date_documented,
                id
            ]
        );
        return updatedInfo;
    } catch (error) {
        return error;
    }
};


module.exports = { getAllVampires, getOneVampire, updateVampireInformation, createVampire, deleteVampire }; 