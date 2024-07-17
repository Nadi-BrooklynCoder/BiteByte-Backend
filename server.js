const app = require('./app');
const PORT = process.env.PORT;

require("dotenv").config();
app.listen(PORT,()=>{
    console.log(`listening on port: ${PORT}`)
})