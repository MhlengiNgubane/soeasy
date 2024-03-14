const Cart = require('../models/Cart');

module.exports = {
    addProductToCart: async (req, res) => {
        const userId = req.user.id;
        const {productId, totalPrice, quantity, additives} = req.body;

        let count;

        try {
            const existingProduct = await Cart.findOne({userId: userId, productId: productId});
            count = await Cart.countDocuments({userId: userId})

            if(existingProduct){
                existingProduct.totalPrice += totalPrice * quantity;
                existingProduct.quantity += quantity;

                await existingProduct.save();
                return res.status(200).json({status: true, count: count})
            }else {
                const newCartItem =new Cart({
                    userId: userId,
                    productId: productId,
                    totalPrice: totalPrice,
                    quantity: quantity,
                    additives: additives
                })

                await newCartItem.save();
                count = await Cart.countDocuments({userId: userId})
                return res.status(201).json({status: true, count: count})
            }
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    removeCartItem: async (req, res) => {
        const cartItemId = req.params.id;
        const userId = req.user.id;

        try {
            await Cart.findByIdAndDelete({_id: cartItemId});
            const count = await Cart.countDocuments({userId: userId})

            res.status(200).json({status: true, count: count})
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getCart: async (req, res) => {
        const userId = req.user.id;

        try {
            const cart = await Cart.find({userId: userId})
            .populate({
                path: 'productId',
                sel
            })
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    }
};