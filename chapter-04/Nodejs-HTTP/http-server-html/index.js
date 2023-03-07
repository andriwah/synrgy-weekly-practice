const http = require('http');
const path = require('path');
const fs = require('fs');
const PUBLIC_DIRECTORY = path.join(__dirname, "public");

const getHTML = (filename) => {
    const htmlFileIndex = path.join(PUBLIC_DIRECTORY, filename);
    const htmlIndex = fs.readFileSync(htmlFileIndex, 'utf-8');

    return htmlIndex
};

const onRequest = (req, res) => {
    switch (req.url) {
        case "/":
            const htmlHome = getHTML('home.html');
            
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(htmlHome);

            return
        case "/about":
            const htmlAbout = getHTML('about.html');
            
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(htmlAbout);

            return
        case "/login":
            const htmlLogin = getHTML('login.html');
            
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(htmlLogin);
    }
}

const server = http.createServer(onRequest)

server.listen(3000, () => {
    console.log('Server sudah berjalan, silakan buka http://localhost:3000')
}); 