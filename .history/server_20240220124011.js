const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CategoryRoute = require("./routes/category");
const RestaurantRoute = require("./routes/restaurant");
const FoodRoute = require("./routes/food");
const RatingRoute = require("./routes/rating");
const sendEmail = require("./utils/otp_email");
const generateOtp = require("./utils/otp_generator");


dotenv.config();

mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("soeasy database connected"))
.catch((err) => console.log(err));

const otp = generateOtp();

console.log(otp)

sendEmail('mhlengims@gmail.com', otp);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/category", CategoryRoute);
app.use("/api/restaurant", RestaurantRoute);
app.use("/api/foods", FoodRoute);
app.use("/api/rating", RatingRoute);

app.listen(process.env.PORT || 6013, () => console.log(`soeasy backend is running on port ${process.env.PORT}!`))