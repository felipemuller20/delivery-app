const { Sale, SaleProduct, User, Product } = require('../../models');
const SaleService = require('../../services/sale/saleSevice');
const rescue = require('express-rescue');

const getSale = rescue(async (_req, res) => {
  const allSale = await Sale.findAll({
    include: [
      { model: Product, as: 'products'},
      // { model: SaleProduct, as: 'saleProducts', through: { attributes: [] }}
    ]
  });
  res.status(200).json(allSale);
});

const create = rescue(async (req, res) => {
  const { totalPrice, deliveryAddress, deliveryNumber, status, products, sellerId } = req.body;
  const { id } = req.user;                                  // productId vem daqui

  const newSale = SaleService.validateEntries({ totalPrice, deliveryAddress, deliveryNumber, status });
  if (newSale.message) return res.status(newSale.status).json({ message: newSale.message });

  const sellerName = await User.findByPk(sellerId);
  const { dataValues } = sellerName;

  const createdSale = await Sale.create({ 
    total_price: totalPrice,
    delivery_address: deliveryAddress,
    delivery_number: deliveryNumber,
    status, user_id: id,
    seller_id: sellerId,
    products,
    seller_name: dataValues.name });

  await products.forEach((product) => {
    SaleProduct.create({
      sale_id: createdSale.id,
      product_id: product.id,
      quantity: product.quantity,
    });
  });

  res.status(201).json(createdSale); // saleId vem daqui
});

const exclude = rescue(async (req, res) => {
  const { id } = req.params;
  await Sale.destroy( { where: { id } });
  res.status(204).end();
})

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const sale = await Sale.findByPk(id);
  if (!sale) return res.status(404).json({ message: 'Sale does not exist' });
  res.status(200).json(sale);
});

const updateSale = rescue(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const updated = await Sale.update({ status }, { where: { id } });
  return res.status(200).json(updated);
});

module.exports = { getSale, create, exclude, getById, updateSale };
