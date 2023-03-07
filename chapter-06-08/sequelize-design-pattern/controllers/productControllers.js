const productServices = require('../services/productServices');

const created = async (req, res) => {
  const { name, price, stock } = req.body;

  const { status, code_status, message, data } = await productServices.create({
    name,
    price,
    stock,
  });
  res.status(code_status).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAll = async (req, res) => {
  const { status, code_status, message, data } = await productServices.getAll();

  res.status(code_status).send({
    status: status,
    message: message,
    data: data,
  });
};

const updated = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  const { status, code_status, message, data } = await productServices.update({ id, name, price, stock });
  res.status(code_status).send({
    status: status,
    message: message,
    data: data,
  });
};

const deleted = async (req, res) => {
  const { id } = req.params;

  const { status, statusCode, message, data } = await productServices.delete({ id });
  return res.status(statusCode).json({
    status,
    message,
    data,
  });
};

module.exports = { created, getAll, updated, deleted };
