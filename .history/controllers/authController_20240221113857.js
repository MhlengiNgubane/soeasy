const User = require("../models/User");
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const generateOtp = require('../utils/otp_generator');
const sendMail = require("../utils/otp_email");

