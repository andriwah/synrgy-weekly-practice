const productRepositories = require('../repositories/productRepositories');

class ProductService {
  static async create({ name, price, stock }) {
    try {
      if (!name) {
        return {
          status: false,
          code_status: 400,
          message: 'Nama Produk wajib diisi',
          data: {
            created: null,
          },
        };
      }

      if (!price) {
        return {
          status: false,
          code_status: 400,
          message: 'Harga Produk wajib diisi',
          data: {
            created: null,
          },
        };
      }

      if (!stock) {
        return {
          status: false,
          code_status: 400,
          message: 'Stock Produk wajib diisi',
          data: {
            created: null,
          },
        };
      }

      const createdProduct = await productRepositories.create({
        name,
        price,
        stock,
      });
      console.log(createdProduct);

      return {
        status: true,
        code_status: 201,
        message: 'Product berhasil ditambahkan',
        data: {
          created: createdProduct,
        },
      };
    } catch (err) {
      return {
        status: false,
        code_status: 500,
        message: err.message,
        data: {
          created: null,
        },
      };
    }
  }

  static async getAll() {
    try {
      const getAllProducts = await productRepositories.getAll();

      return {
        status: true,
        code_status: 200,
        message: 'Data Product berhasil ditampilkan',
        data: {
          Products: getAllProducts,
        },
      };
    } catch (err) {
      return {
        status: false,
        code_status: 500,
        message: err.message,
        data: {
          registered_Users: null,
        },
      };
    }
  }

  static async update({ id, name, price, stock }) {
    try {
      if (!name) {
        return {
          status: false,
          code_status: 400,
          message: 'Nama Product wajib diisi',
          data: {
            registered_Users: null,
          },
        };
      }

      if (!price) {
        return {
          status: false,
          code_status: 400,
          message: 'Harga Product wajib diisi',
          data: {
            registered_Users: null,
          },
        };
      }

      if (!stock) {
        return {
          status: false,
          code_status: 400,
          message: 'Stock Product wajib diisi',
          data: {
            registered_Users: null,
          },
        };
      }

      const updatedProduct = await productRepositories.update({ id, name, price, stock });

      return {
        status: true,
        code_status: 201,
        message: 'Product berhasil diupdate',
        data: {
          updatedProduct: updatedProduct,
        },
      };
    } catch (err) {
      return {
        status: false,
        code_status: 500,
        message: err.message,
        data: {
          registered_Users: null,
        },
      };
    }
  }

  static async delete({ id }) {
    try {
      const deleted_product = await productRepositories.delete({ id });

      if (deleted_product == 0) {
        return {
          status: 'NOT_FOUND',
          statusCode: 404,
          message: `Product not found`,
          data: {
            deleted_product: null,
          },
        };
      }

      return {
        status: 'OK',
        statusCode: 200,
        message: `Product deleted`,
        data: {
          deleted_product: deleted_product,
        },
      };
    } catch (err) {
      return {
        status: 'INTERNAL_SERVER_ERROR',
        statusCode: 500,
        message: err,
        data: {
          deleted_product: null,
        },
      };
    }
  }
}

module.exports = ProductService;
