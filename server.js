const express = require('express');
const server = express();

server.all('/', (req, res) => {
res.send('servidor listo')
}) 

function keepAlive() {
  server.listen(3000, () => { console.log('express open' + Date.now()) });
}
module.exports = keepAlive;