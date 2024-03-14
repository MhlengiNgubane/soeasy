const Cart = require('../models/Cart');

module.exports = {
    addProductToCart: async (req, res) => {
        const userId = req.user.id;
        const {productId, totalPrice, quantity, additives} = req.body;

        let count;

        try {
            const existingProduct = await Cart.findOne({userId: userId, productId: productId});
            count = await Cart.cou
        } catch (error) {
            
        }
    }
};