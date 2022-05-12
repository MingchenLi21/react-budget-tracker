const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL
// 'mongodb://localhost:27017/budgetApp'
// "mongodb+srv://Admin5_11:AhArTQ15GeyTit5H@cluster0.mxqwx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect("mongodb://localhost:27017/budgetApp")
    .then(() => {
        console.log("Connection established!");
    }).catch( (err) => {
        console.log("There is an error while connecting to db.");
        console.log(err);
    });


module.exports = mongoose.connection;