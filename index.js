const express = require('express');
const dotenv = require('dotenv');
const fibonacci = require('./fibonacci');

dotenv.config();
const server = express();

server.use(express.json());

const port = process.env.PORT || 8989;

server.listen(port, () => {
    console.log(`listening on port 8989`);
});

server.get('/fibonacci/:upto', (req, res) => {
    const upto = req.params.upto;
    res.send(`fibonacci for ${upto} is ${fibonacci(parseInt(upto))}`);
});

