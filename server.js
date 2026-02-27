const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const QRCode = require('qrcode');

const PORT = process.env.PORT || 3000;
const MIMES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  if (parsed.pathname === '/qr' && parsed.query.url) {
    const targetUrl = decodeURIComponent(parsed.query.url);
    QRCode.toBuffer(targetUrl, { width: 136, margin: 1 })
      .then(buf => {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(buf);
      })
      .catch(err => {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('QR Error: ' + (err.message || 'Unknown'));
      });
    return;
  }

  let file = req.url === '/' ? '/form.html' : parsed.pathname;
  file = path.join(__dirname, path.normalize(file).replace(/^(\.\.(\/|\\|$))+/, ''));
  const ext = path.extname(file);

  fs.readFile(file, (err, data) => {
    if (err || !data) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIMES[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Form: http://localhost:${PORT}/form.html`);
  console.log(`Poster: http://localhost:${PORT}/poster.html`);
});
