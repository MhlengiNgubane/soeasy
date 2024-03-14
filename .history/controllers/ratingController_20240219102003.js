const Rating = require("../models/Rating");
const Restaurant = require("../models/Restaurant");
const Food = require("../models/Food");

module.exports = {
    addRating: async (req, res) => {
        const newRating = new Rating({
            userId: req.body.id,
            ratingType: req.body.rating,
            product: req.body.product,
            rating: req.body.rating
        });

        try {
            await newRating.save();

            if(req.body.ratingType === "Restaurant"){
                const restaurants = await Rating.aggregate([
                    {$match: {ratingType: req.body.ratingType, product: req.body.product }},
                    {$group: {_id: '$product'}, averageRating: {$avg: '$rating'}}
                ]);

                if(restaurants.length > 0){
                    const averageRating = restaurants[0].averageRating;
                    await Restaurant.findByIdAndUpdate(req.body.product, {rating: averageRating}, {new: true})
                }
            } else if(req.body.ratingType === "Food"){
                const foods = await Rating.aggregate([
                    {$match: {ratingType: req.body.ratingType, product: req.body.product }},
                    {$group: {_id: '$product'}, averageRating: {$avg: '$rating'}}
                ]);

                if(foods.length > 0){
                    const averageRating = foods[0].averageRating;
                    await Food.findByIdAndUpdate(req.body.product, {rating: averageRating}, {new: true})
                }
            }

            res.status(201).json({status: true, message: "Rating updated success"});
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    }
};