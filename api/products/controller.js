import data from './data.js';

export function getProducts(req, res) {
	res.status(200).json(data);
}

export function getProduct(req, res) {
	const product = data.find((prod) => prod.id === +req.params.id);

	res.status(200).json(product);
}
