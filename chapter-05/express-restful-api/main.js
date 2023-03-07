const express = require('express');
const handler = require('./handler/handler.js');
const middleware = require('./middleware/middleware');
const upload = require('./helpers/fileUploadCloudinary');

const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());

app.get('/users', handler.getHandler);
app.get('/users/:id', handler.findHandler);
app.post('/users', upload.single('picture'), middleware.isAdmin, handler.createHandler);
app.put('/users/:id', handler.updateHandler);
app.delete('/users/:id', handler.deleteHandler);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
