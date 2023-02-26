const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./dbserver');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
db.on('error',console.error.bind(console,"DB Error:"))

app.get('/',(req,res) => {
    res.send("Hello World from api");
});

app.listen(7000,() => {
    console.log("Server running on http://localhost:7000")
})