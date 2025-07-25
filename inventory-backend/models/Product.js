const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  type: String,
  sku: String,
  image_url: String,
  description: String,
  quantity: Number,
  price: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
