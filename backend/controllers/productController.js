const asyncHandler = require('express-async-handler');

// @desc    Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  res.send('GET PRODUCTS');
});

module.exports = { getProducts };
