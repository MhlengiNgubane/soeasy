const User = require("../models/User");
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const generateOtp = require("../utils/otp_generator");


module.exports = {
    createUser: async (req, res) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{a,4}$/;

        if(!emailRegex.test(req.body.email)){
            return res.status(400).json({status: false, message: "Invalid email"});
        }

        const minPasswordLength = 8;

        if(req.body.password < minPasswordLength){
            return res.status(400).json({status: false, message: "Password should be at "})
        }
    },
    loginUser: async (req, res) => {},
}