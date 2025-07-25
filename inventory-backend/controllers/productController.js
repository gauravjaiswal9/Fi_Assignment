const Product = require('../models/Product');

// POST /products
exports.addProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      user: req.user 
    });
    await product.save();
    res.status(201).json({ 
      message: 'Product added', id: product._id 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /products/:id/quantity
exports.updateQuantity = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, user: req.user }, 
      { $set: { quantity: req.body.quantity } },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ 
        message: 'Product not found or unauthorized' 
      });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /products?page=1
exports.getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  try {
    const products = await Product.find({ user: req.user }) 
      .skip(skip)
      .limit(limit);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
