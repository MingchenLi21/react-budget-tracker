const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    budget: {type: Number, required: true},
    items: [
        {
            _id: {type: String, required: true},
            name: {type: String, required: true},
            category: {type: String, required: true},
            date: {type: Date, required: true},
            amount: {type: Number, required: true}
        }
    ]
})
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
