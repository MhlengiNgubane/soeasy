const Food = require('../models/Food');

module.exports = {
    addFood: async (req, res) => {
        const { title, foodTag, category, code, restaurant, description, time, price, additives, imageUrl} = req.body;

        if( !title || !foodTag || !category || !code || !restaurant || !description || !time || !price || !additives || imageUrl) {
            return res.status(400).json({ status: false, message: "You have a missing field"});
        }
        try {
            const newFood = new Food(req.Food);

            await newFood.save();

            res.status(201).json({ status: true, message: "Food has been successfully created" });
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getFoo

};