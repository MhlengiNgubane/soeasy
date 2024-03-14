const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CategoryRoute = require("./routes/category");
const RestaurantRoute = require("./routes/restaurant");


dotenv.config();

mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("soeasy database connected"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/category", CategoryRoute);
app.use("/api/restaurant", RestaurantRoute);
app.use("/api/foods", RestaurantRoute);

app.listen(process.env.PORT || 6013, () => console.log(`soeasy backend is running on port ${process.env.PORT}!`))