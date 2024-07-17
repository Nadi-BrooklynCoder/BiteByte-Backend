const db = require('../db/dbConfig')


const getAllVampires = async () => {
    try {
        const allVamps = await db.any("SELECT * FROM vampires")
        return allVamps
    } catch (error) {
        return error
    }
}


module.exports = getAllVampires; 