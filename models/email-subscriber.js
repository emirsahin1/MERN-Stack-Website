const mongoose = require("mongoose");

EmailSubscriber = new mongoose.Schema(
    {
        email:String
    }
);

module.exports = mongoose.model("EmailSubscriber", EmailSubscriber);