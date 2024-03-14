const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("soeasy database connected"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.)

app.listen(process.env.PORT || 6013, () => console.log(`soeasy backend is running on port ${process.env.PORT}!`))