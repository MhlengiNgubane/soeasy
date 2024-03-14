const Food = require('../models/Food');

module.exports = {
    addFood: async (req, res) => {
        const { title, foodTag, category, code, restaurant, description, time, price, additives, imageUrl} = req.body;

        if( !title || !foodTag || !category || !code || !restaurant || !description || !time || !price || !additives || imageUrl) {
            return res.status(400).json({ status: false, message: "You have a missing field"});
        }
        try {
            new
        } catch (error) {
            
        }
    },
};