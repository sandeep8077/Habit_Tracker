const env = require('./environment');
const mongoose = require("mongoose");
mongoose.connect(process.env.db).then(() => { console.log("Database connected succesfully") }).
catch((err) => {
    console.log("Not connected database");

})