const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 8080;
const { dbConnection } = require("./config/config")

app.use(express.json())
app.use(cors())
dbConnection()


app.use('/news', require ('./routes/news'));




app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
module.exports = app;