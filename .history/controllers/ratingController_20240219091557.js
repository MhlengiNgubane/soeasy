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
                const restaurant = await Rating.aggregate([
                    {$match: {ratingType: req.body.ratingType, product: req.body.product }},
                    {}
                ])
            }
        } catch (error) {
            
        }
    }
};