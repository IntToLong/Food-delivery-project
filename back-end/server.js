const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db');
const Shop = require('./models/shopModel');
const Order = require('./models/orderModel');

app.use(cors());

connectDB();

app.use(express.json());

app.get('/api', (req, res) => {
	res.send('Hello, world!');
});

app.get('/api/shop', (req, res) => {
	Shop.find()
		.then((shops) => {
			if (shops.length === 0) {
				return res.status(404).json({ message: 'No shops found' });
			}
			res.json(shops);
		})
		.catch((error) => {
			console.error('Error retrieving shops:', error);
			res.status(500).send('Error retrieving shops');
		});
});

app.post('/api/order', async (req, res) => {
	const { name, email, phone, address, totalPrice, items } = req.body;

	try {
		const order = new Order({ name, email, phone, address, totalPrice, items });
		await order.save();

		res.json(order);
	} catch (error) {
		console.error('Error saving order:', error);
		res.status(500).json({ error: 'Server error' });
	}
});

const port = 4000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
