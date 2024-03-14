const Category = require('../models/Category');

module.exports = {
    createCategory: async (req, res) => {
        const newCategory = new Category(req.body);
        try {
            await
        } catch (error) {

        }
    }
};