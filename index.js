const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv');
const db = require('./config/db');
const { default: mongoose } = require('mongoose');

const app = express();
env.config();
const routesList = require('./routes/')

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use(routesList);


const PORT = process.env.PORT || 7000

db. 
then(() =>{
  console.log("database terkoneksi")
})
.catch((arr) => {
  console.log(err);
})

app.use(express.json())

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})