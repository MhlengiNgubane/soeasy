const User = require("../models/User");

module.exports = {
    getUser: async(req, res) => {
        try {
            const user = await User.findById(req.user.id)

            const { password, __v, createdAt, ...userData} = user._doc;

            res.status(200).json(userData);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    verifyAccount: async(req, res) => {
        const userOtp = req.params.otp;

        try {
            const user = await User.findById(req.user.id);

            if(!user){
                return res.status(400).json({status: false, message: "User not found"});
            }

            if(userOtp === user.otp){
                user.verification = true;
                user.otp = "none"
            }
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    }
}