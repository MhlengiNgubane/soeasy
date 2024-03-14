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

    getFoodById: async (req, res) => {
        const id = req.params.id;
        try {
            const food = await Food.findById(id);

            res.status(200).json(food);
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getRandomFood: async (req, res) => {
        const code = req.params.code;
        try {
            let foods;
            if(code){
                foods = await Food.aggregate([
                    { $match: {code: code, isAvailable: true}},
                    { $sample: {size: 5}},
                    {$project: {}}
                ]);
            }

            res.status(200).json(food)
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },
};