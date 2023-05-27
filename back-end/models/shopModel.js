const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

const shopSchema = new mongoose.Schema({
	restaurant: {
		type: String,
		required: true,
	},
	menuItems: [menuItemSchema],
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
