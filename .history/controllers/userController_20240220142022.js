const User = require("../models/User");

module.exports = {
    getUser: async(req, res) => {
        try {
            const user = await User.findById(req.user.id)

            const { password, __v, createdAt, ...userData} = user.doc;

            res.status(200).json(userData);
        } catch (error) {
            res.status(500).json
        }
    }
}