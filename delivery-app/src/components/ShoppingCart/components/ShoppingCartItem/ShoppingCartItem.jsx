import { useContext } from 'react';
import { ShoppingCartContext } from '../../../../Context/ShoppingCartContext';

import { useState } from 'react';

import Card from '../../../../common/Card/Card';

import './ShoppingCartItem.css';

function ShoppingCartItem(props) {
	const [quantity, setQuantity] = useState(props.quantity);

	const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

	const increase = () => {
		const updatedCart = shoppingCart.map((item) => {
			if (item.title === props.title) {
				return { ...item, quantity: item.quantity + 1 };
			}
			return item;
		});
		setShoppingCart(updatedCart);
		setQuantity((count) => count + 1);
	};

	const decrease = () => {
		const updatedCart = shoppingCart.map((item) => {
			if (item.title === props.title) {
				return { ...item, quantity: item.quantity - 1 };
			}
			return item;
		});
		setShoppingCart(updatedCart);
		if (quantity === 1) {
			let filteredCart = shoppingCart.filter((el) => el.title !== props.title);
			setShoppingCart(filteredCart);
		}

		setQuantity((count) => count - 1);
	};
	return (
		<Card className={'cartItem'}>
			<div className={'cartItem__img'}>
				<img src={props.src} alt={props.alt} />
			</div>
			<div className={'cartItem__info'}>
				<p className={'cartItem__title'}>{props.title}</p>
				<p>
					<span className={'cartItem__price'}>Price:</span> {props.price} $
				</p>
				<div className='cartItem__quantity'>
					<button onClick={decrease}>
						{<img src='../../../../../minus-solid.svg' alt='minus' />}
					</button>
					<p className='cartItem__counter'>{quantity}</p>
					<button onClick={increase}>
						{<img src='../../../../../plus-solid.svg' alt='plus' />}
					</button>
				</div>
			</div>
		</Card>
	);
}

export default ShoppingCartItem;
