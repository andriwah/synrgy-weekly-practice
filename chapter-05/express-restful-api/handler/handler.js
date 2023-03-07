const User = require('./user');
const cloudinary = require('../configs/cloudinary');

function getHandler(req, res) {
  const user = User.getList();

  res.status(200).json({
    status: 'OK',
    message: 'Success retrieving data',
    data: user,
  });
}

function findHandler(req, res) {
  const user = User.find(req.params.id);

  res
    .status(200)
    .json({
      status: 'OK',
      message: 'Success retrieving data',
      data: user,
    })
    .catch((err) => {
      res.status(400).json({
        status: 'INVALID',
        message: 'User not found',
        data: err,
      });
    });
}

function createHandler(req, res) {
  const fileBase64 = req.file.buffer.toString('base64');
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;

  cloudinary.uploader.upload(file, function (err, result) {
    if (!!err) {
      console.log(err);
      return res.status(400).json({
        message: 'Gagal upload file!',
      });
    }

    res.status(201).json({
      message: 'Upload image berhasil',
      url: result.url,
    });
  });
  req.body.picture = result.url;
  const user = User.create(req.body);

  res
    .status(200)
    .json({
      status: 'OK',
      message: 'Succes to create',
      data: user,
    })
    .catch((err) => {
      res.status(400).json({
        status: 'INVALID',
        message: 'Succes to create',
        data: err,
      });
    });
}

function updateHandler(req, res) {
  User.update(req.body, req.params.id);
  const user = User.getList();
  res
    .status(201)
    .json({
      status: 'OK',
      message: 'Succes to update',
      data: user,
    })
    .catch((err) => {
      res.status(400).json({
        status: 'INVALID',
        message: 'Failed to Update',
        data: err,
      });
    });
}

function deleteHandler(req, res) {
  User.delete(req.params.id);

  res.status(200).send({
    status: 'OK',
    message: 'Succes Delete',
  });
}

module.exports = {
  getHandler,
  createHandler,
  updateHandler,
  findHandler,
  deleteHandler,
};
