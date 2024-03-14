const User = require("../models/User");
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const generateOtp = require("../utils/otp_generator");


module.exports = {
    createUser: async (req, res) => {
        const emailRegex = /^[a-zA-z0-9._-]+@[a-zA-]
    },
    loginUser: async (req, res) => {},
}