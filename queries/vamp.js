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

const updateVampireInformation = async (id, newInfo) => {
    try {
        const updatedInfo = await db.one(
            "UPDATE vampires SET name=$1, date_turned=$2, location=$3, age=$4, main_diet=$5, power=$6, is_dangerous=$7 WHERE id=$8 RETURNING *",
            [
                newInfo.name,
                newInfo.date_turned,
                newInfo.location,
                newInfo.age,
                newInfo.main_diet,
                newInfo.power,
                newInfo.is_dangerous,
                id
            ]
        );
        return updatedInfo;
    } catch (error) {
        return error;
    }
};


module.exports = { getAllVampires, getOneVampire, updateVampireInformation }; 