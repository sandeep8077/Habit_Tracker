const mongoose = require("mongoose");
const db = `mongodb+srv://Sandy:Sandeep1234@cluster0.xht1b3f.mongodb.net/SKILLHBT?retryWrites=true&w=majority`
mongoose.connect(db).then(() => { console.log("Database connected succesfully") }).
catch((err) => {
    console.log("Not connected database");

})