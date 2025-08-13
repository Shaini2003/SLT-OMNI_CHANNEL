const ProductOrder = require('../models/ProductOrder');

exports.createProductOrder = async (req, res) => {
  try {
    const { telNo, productID, pin, requestType } = req.body;

    if (!telNo || !productID || !pin) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const order = await ProductOrder.create({
      telNo,
      productID,
      pin,
      requestType
    });

    return res.status(201).json({
      message: 'Product order created successfully',
      order
    });
  } catch (err) {
    console.error('Error creating product order:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
