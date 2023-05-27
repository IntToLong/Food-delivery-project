import { useContext, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';

import { ShoppingCartContext } from '../../Context/ShoppingCartContext';

import Card from '../../common/Card/Card';
import ClientInfo from '../ClientInfo/ClientInfo';
import ShoppingCartItem from './components/ShoppingCartItem/ShoppingCartItem';
import Button from '../../common/Button/Button';

import { getTotalPrice } from '../../Helpers/getTotalPrice';
import { isUserDataValid } from '../../Helpers/isUserDataValid';

import './ShoppingCart.css';

function ShoppingCart() {
	const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

	const [userData, setUserData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
	});

	useEffect(() => {
		const cartJSON = JSON.stringify(shoppingCart);
		localStorage.setItem('cart', cartJSON);
	}, [shoppingCart]);

	let totalPrice = getTotalPrice(shoppingCart);

	let orderData = { ...userData, totalPrice: totalPrice, items: shoppingCart };

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isUserDataValid(userData)) {
			console.log('Submitting data:', orderData);
			axios
				.post('http://localhost:4000/api/order', orderData)
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		} else {
			alert('Please fill in all the fields.');
			console.log('Please fill in all the fields.');
		}
	};

	let itemsInCart = shoppingCart.map((el) => {
		return (
			<ShoppingCartItem
				key={uuid()}
				src={el.src}
				title={el.title}
				price={el.price}
				quantity={el.quantity}
			/>
		);
	});

	return (
		<Card>
			<div className={'ShoppingCartWrapper'}>
				<ClientInfo userData={userData} setUserData={setUserData} />
				<Card className={'ShoppingCartItemWrapper'}>{itemsInCart}</Card>
			</div>
			<div className='totalPriceContainer'>
				<p className={'totalPrice'}>
					<span className='bold'>Total price:</span> {totalPrice} $
				</p>
				<Button value={'Submit'} onClick={handleSubmit} />
			</div>
		</Card>
	);
}

export default ShoppingCart;
