const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());

// IMPORT CONTROLLERS
const productController = require('./controllers/productControllers');
const authController = require('./controllers/authControllers');

// IMPORT MIDDLEWARES
const middleware = require('./middlewares/auth');

// ROUTING USER
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);
app.get('/auth/me', middleware.authenticate, authController.currentUser);

// ROUTING PRODUCTS
app.post('/product/create', productController.created);
app.get('/product', productController.getAll);
app.put('/product/update/:id', productController.updated);
app.delete('/product/delete/:id', productController.deleted);

// SWAGGEN DOCUMENTATION
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8000, () => {
  console.log('Server berjalan di server http://localhost:8000');
});
