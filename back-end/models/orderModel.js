const mongoose = require('mongoose');

const chosenItemsSchema = new mongoose.Schema({
	src: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

const orderSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	totalPrice: {
		type: Number,
		required: true,
	},
	items: [chosenItemsSchema],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
