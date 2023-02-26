const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://akashsoni298:akashsoni298@mern-sept22.auhwoul.mongodb.net/?retryWrites=true&w=majority')
    .catch(e => {
        console.log("Connection error",e.message);
    })

const db = mongoose.connection;
module.exports = db;