const mongoose = require("mongoose")
require("dotenv").config()
const databse = () => {
    mongoose.connect(process.env.MONGO_URI,)
        .then(() => {
            console.log("DataBase Connected Successfully");
        })
        .catch(() => {
            console.log("DataBase not Connected Successfully");
        })
}
module.exports = databse