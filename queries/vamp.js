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

module.exports = { getAllVampires, getOneVampire }; 