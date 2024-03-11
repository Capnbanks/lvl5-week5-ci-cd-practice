import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const server = express()

server.use(express.json());

const port = process.env.PORT || 8989;

server.listen(port, () => {
    console.log(`listening on port 8989`);
})