const Category = require('../models/Category');

module.exports = {
    createCategory: async (req, res) => {
        const newCategory = new Category(req.body);
        try {
            await newCategory.save();
            res.status(201).json({status: true, message: "Category created successfully"});
        } catch (error) {
            res.status(500).json({status: false, message: error.message})
        }
    },

    getAllCategories: async (req, res) => {
        const newCategory = new Category(req.body);
        try {
            // 
            await categories.find({ title: {$ne: "More"}}, {__v: 0});
            res.status(201).json({status: true, message: "Category created successfully"});
        } catch (error) {
            res.status(500).json({status: false, message: error.message})
        }
    }
};