const http = require('http');

function toJson(value) {
  return JSON.stringify(value);
}

function onRequest(req, res) {
  switch (req.url) {
    case '/':
      const userJSON = toJson({
        id: 'as24kjfasn413',
        email: 'ruslam@example.com',
        name: 'Ruslam Panjaitan',
        password: 'sembarang1',
      });
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(userJSON);
      return userJSON
    case '/products':
      const productJSON = toJson({
        id: 'as24kjfa68sn413',
        user_id: 'as24kjfasn413',
        name: 'Vans Slip-on OG',
        price: '750000',
        stock: '21'
      });
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(productJSON);
      return productJSON
    case '/transactions':
      const transactionsJSON = toJson({
        id: 'as24kjfa68sn413',
        user_id: 'as24kjfasn413',
        product_id : 'vans1993'
      });
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(transactionsJSON);
      return transactionsJSON
  };
};

const server = http.createServer(onRequest)

server.listen(2000, () => {
    console.log('Server sudah berjalan, silakan buka http://localhost:2000')
}); 
