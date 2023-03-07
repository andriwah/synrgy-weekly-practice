const { Product } = require('../models');

class ProductRepository {
  // Query Create
  static async create({ name, price, stock }) {
    const created_product = await Product.create({
      name,
      price,
      stock,
    });
    return created_product;
  }

  // Query Get All
  static async getAll() {
    const getAllProducts = await Product.findAll();

    return getAllProducts;
  }

  // Query Get By Id
  static async getById({ id }) {
    const getProductsById = await Product.findOne({ where: { id } });

    return getProductsById;
  }

  // Query Update
  static async update({ id, name, price, stock }) {
    const updated_product = await Product.update({ name, price, stock }, { where: { id } });

    return updated_product;
  }

  // Query Delete
  static async delete({ id }) {
    const deleted_product = await Product.destroy({ where: { id } });

    return deleted_product;
  }
}

module.exports = ProductRepository;
