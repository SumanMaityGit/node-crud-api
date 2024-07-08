const Product = require("../model/Product");

// Get All products
const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json({ message: error });
    }
};

// Single products
const product_details = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (error) {
        res.json({ message: error});
    }
};

// Add New product
const product_create = async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
    });

    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (error) {
        res.status(404).send(error);
    }
};

// Update product
const product_update = async (req, res) => {
    try {
        const product = {
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            details: req.body.details
        };

        const updateProduct = await Product.findByIdAndUpdate(
            { _id: req.params.productId },
            product
        );
        res.json(updateProduct);
    } catch (error) {
        res.json({ message: error });
    }
};

// Delete product
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}


