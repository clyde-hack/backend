import 'dotenv/config';
import express from 'express';
import products from './api/products/endpoints.js';

const server = express();
const port = process.env.PORT;
const publicDirectoryPath = './uploads';

server.use(express.static(publicDirectoryPath));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
server.use(products);

server.listen(port, () => console.log(`Server is running on port ${port}...`));
